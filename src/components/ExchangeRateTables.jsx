import React from 'react';

const formatRate = (value) => {
  if (value === null || value === undefined || value === '') {
    return '—';
  }

  return value;
};

const TableCell = ({ children, className = '' }) => (
  <div className={`px-4 py-3 text-sm ${className}`}>{children}</div>
);

const ExchangeRateTables = ({ data, compact = false }) => {
  const title = data?.title || 'Latest Exchange Rates';
  const rows = Array.isArray(data?.rows) ? data.rows : Array.isArray(data?.cashRows) ? data.cashRows : [];
  const weightedAverageRows = Array.isArray(data?.weightedAverageRows) ? data.weightedAverageRows : [];
  const marketLabel = rows.find((rate) => rate?.marketLabel)?.marketLabel || '';
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (rows.length === 0 && weightedAverageRows.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
        No live data.
      </div>
    );
  }

  const textSizeClass = compact ? 'text-xs' : 'text-sm';
  const headerGroupClass = compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm';
  const rowsScrollClass = compact ? 'max-h-[16rem]' : 'max-h-[26rem]';
  const shouldShowWeightedSection = weightedAverageRows.some(
    (rate) => rate?.weightedBuying !== null || rate?.weightedSelling !== null,
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Date {today}</p>
        <h4 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-gray-900`}>{title}</h4>
        {marketLabel ? (
          <p className="text-sm font-medium text-gray-500">{marketLabel} rates</p>
        ) : null}
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className={`grid grid-cols-3 bg-red-700 text-white font-semibold ${headerGroupClass}`}>
          <div className="col-span-1">Currency</div>
          <div className="col-span-1 text-center border-l border-white/20">BUYING</div>
          <div className="col-span-1 text-center border-l border-white/20">SELLING</div>
        </div>

        <div className={`${rowsScrollClass} overflow-y-auto bg-gray-50`}>
          {rows.map((rate) => (
            <div key={rate.currency} className={`${compact ? 'grid grid-cols-3 border-b border-gray-100' : 'grid grid-cols-3 border-b border-gray-200'} items-center bg-white odd:bg-gray-50`}>
              <TableCell className="font-semibold text-gray-900 truncate" title={rate.currencyName || rate.currency}>
                {rate.currency}
              </TableCell>
              <TableCell className="text-center text-green-600 font-semibold">{formatRate(rate.buying)}</TableCell>
              <TableCell className="text-center text-red-600 font-semibold">{formatRate(rate.selling)}</TableCell>
            </div>
          ))}
        </div>
      </section>

      {shouldShowWeightedSection ? (
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className={`grid grid-cols-3 bg-slate-800 text-white font-semibold ${headerGroupClass}`}>
            <div>Currency</div>
            <div className="text-center">BUYING</div>
            <div className="text-center">SELLING</div>
          </div>

          <div className={`${compact ? 'max-h-[10rem]' : 'max-h-[14rem]'} overflow-y-auto bg-gray-50`}>
          {weightedAverageRows.map((rate) => (
            <div key={rate.currency} className={`grid grid-cols-3 items-center ${textSizeClass} bg-white odd:bg-gray-50 border-b border-gray-100`}>
              <TableCell className="font-semibold text-gray-900 truncate" title={rate.currencyName || rate.currency}>
                {rate.currency}
              </TableCell>
              <TableCell className="text-center text-green-600 font-semibold">{formatRate(rate.weightedBuying)}</TableCell>
              <TableCell className="text-center text-red-600 font-semibold">{formatRate(rate.weightedSelling)}</TableCell>
            </div>
          ))}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ExchangeRateTables;
