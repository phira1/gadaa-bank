const toRateString = (value) => {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  return numericValue.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
};

const preferredCurrencyOrder = ['USD', 'GBP', 'EUR', 'CHF', 'SAR', 'AED'];

const marketLabels = {
  '1': 'Cash',
  '10': 'Transaction',
  '3': 'Weighted Average',
};

const sortCurrencies = (left, right) => {
  const leftPreferred = preferredCurrencyOrder.indexOf(left.currency);
  const rightPreferred = preferredCurrencyOrder.indexOf(right.currency);

  if (leftPreferred !== -1 || rightPreferred !== -1) {
    if (leftPreferred === -1) return 1;
    if (rightPreferred === -1) return -1;
    if (leftPreferred !== rightPreferred) return leftPreferred - rightPreferred;
  }

  return left.order - right.order;
};

export const normalizeExchangeRateResponse = (response) => {
  const payload = response?.data ?? response ?? {};
  const body = Array.isArray(payload.data)
    ? payload.data
    : Array.isArray(payload.body)
      ? payload.body
      : Array.isArray(payload)
        ? payload
        : [];

  const byCurrency = new Map();
  let activeCurrency = null;

  const getCurrencyEntry = (currency, currencyName) => {
    if (!byCurrency.has(currency)) {
      byCurrency.set(currency, {
        currency,
        currencyName: currencyName || currency,
        markets: {},
        order: byCurrency.size,
      });
    }

    const entry = byCurrency.get(currency);

    if (currencyName && entry.currencyName === currency) {
      entry.currencyName = currencyName;
    }

    return entry;
  };

  body.forEach((item) => {
    if (!item || typeof item !== 'object') {
      return;
    }

    const rawCurrency = item.currencyId ?? item.currency ?? item.currency_code ?? item.code;

    if (!rawCurrency || rawCurrency === 'Latest Exchange Rates') {
      return;
    }

    const buyRate = toRateString(item.buy_rate ?? item.buyRate ?? item.buy);
    const sellRate = toRateString(item.sell_rate ?? item.sellRate ?? item.sell);
    const midRate = toRateString(item.mid_rate ?? item.midRevalRate ?? item.mid);
    const market = String(item.currencyMarket ?? item.market ?? '');
    const hasRates = buyRate !== null || sellRate !== null || midRate !== null;

    if (typeof rawCurrency === 'string' && rawCurrency !== '') {
      activeCurrency = rawCurrency;
    }

    const currency = activeCurrency;

    if (!currency || !hasRates) {
      return;
    }

    const entry = getCurrencyEntry(currency, item.currencyName ?? item.currency_name ?? currency);

    if (market) {
      entry.markets[market] = {
        buy_rate: buyRate,
        sell_rate: sellRate,
        mid_rate: midRate,
      };
    }
  });

  const rows = Array.from(byCurrency.values())
    .sort(sortCurrencies)
    .map((entry) => {
      const primaryMarket = ['1', '10', '3'].find((market) => {
        const marketRate = entry.markets[market];
        return marketRate?.buy_rate !== null || marketRate?.sell_rate !== null || marketRate?.mid_rate !== null;
      }) ?? null;

      if (!primaryMarket) {
        return null;
      }

      const marketRate = entry.markets[primaryMarket];

      return {
        currency: entry.currency,
        currencyName: entry.currencyName,
        marketCode: primaryMarket,
        marketLabel: primaryMarket ? marketLabels[primaryMarket] || 'Rates' : 'Rates',
        buying: marketRate?.buy_rate ?? marketRate?.mid_rate ?? null,
        selling: marketRate?.sell_rate ?? marketRate?.mid_rate ?? null,
        weightedBuying: primaryMarket === '3' ? marketRate?.buy_rate ?? null : null,
        weightedSelling: primaryMarket === '3' ? marketRate?.sell_rate ?? null : null,
      };
    })
    .filter(Boolean);

  return {
    title: payload?.header?.data?.HEADER || 'Latest Exchange Rates',
    rows,
    cashRows: rows,
    weightedAverageRows: rows,
  };
};

export const selectFeaturedExchangeRates = (rates, featuredCurrencies = ['USD', 'EUR', 'GBP', 'AED']) => {
  if (!Array.isArray(rates) || rates.length === 0) {
    return [];
  }

  const featuredRates = featuredCurrencies
    .map((currency) => rates.find((rate) => rate.currency === currency))
    .filter(Boolean);

  return featuredRates.length > 0 ? featuredRates : rates.slice(0, 4);
};
