// src/data/chatbotKnowledge.js

export const intents = [
  {
    id: 'help',
    keywords: ['help', 'menu', 'what can you do', 'what do you know', 'capabilities'],
    response: () => ({
      text: "I can help you with:\n• Gadaa Bank info (history, vision, mission, core values)\n• Board & management\n• Opening an account\n• Savings, current, time deposit accounts\n• Personal & business loans\n• Guarantee facilities\n• International banking (forex, trade finance, money transfer, diaspora)\n• Interest-free banking (Wadiah, Amanah, Mudarabah)\n• Digital banking (mobile, internet, card, ATM, merchant)\n• Corporate banking\n• News, vacancies, annual reports\n• Fees & tariffs\n• Branch/ATM/agent locators\n• Contact details\n\nJust ask me anything related to these topics!"
    })
  },
  {
    id: 'name',
    keywords: ['what is your name', 'who are you', 'your name', 'who is this'],
    response: () => ({
      text: "I'm Gadaa Bot, your virtual banking assistant. I'm here to help you with any questions about Gadaa Bank. What can I do for you today?"
    })
  },
  {
    id: 'how_are_you',
    keywords: ['how are you', 'how do you do', 'are you fine', 'you okay', "how's it going"],
    response: () => ({
      text: "I'm doing great, thanks for asking! 😊 I'm ready to help you with any banking needs. What can I assist you with today?"
    })
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thx', 'appreciate it'],
    response: () => ({
      text: "You're very welcome! 😊 Thank you for banking with Gadaa Bank – New Generation's Bank. If you have any other questions, feel free to ask. Have a great day!"
    })
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: () => ({
      text: "Hello! Welcome to Gadaa Bank. I'm Gadaa Bot, your digital assistant. How can I help you today?"
    })
  },
  {
    id: 'loan_calculator',
    keywords: ['loan calculator', 'loan calculate', 'calculate loan', 'emi calculator', 'loan payment'],
    response: () => ({
      text: "Estimate your loan payments using our calculator at /tools/loan-calculator.",
      link: "/tools/loan-calculator"
    })
  },
  {
    id: 'gadaa_meaning',
    keywords: ['gadaa mean', 'what is gadaa', 'meaning of gadaa'],
    response: () => ({
      text: "Gadaa is the traditional socio-political and cultural system of the Oromo people. The word 'Gadaa' refers to both the age-set governance system and the generational structure that organizes Oromo society into successive leadership classes. It’s an indigenous democratic institution with peaceful power transfers every eight years. Our bank is named after this system to reflect our values of community, transparency, and sustainable growth."
    })
  },
  {
    id: 'core_values',
    keywords: ['core values', 'gadaa values'],
    response: () => ({
      text: "Our five core values are:\n• Growth Mindset\n• Approachable\n• Diversity\n• Accountability\n• Accessibility\n\nThese guide everything we do at Gadaa Bank."
    })
  },
  {
    id: 'account_types',
    keywords: ['types of accounts', 'what accounts do you offer', 'account types', 'what accounts are there'],
    response: () => ({
      text: "We offer a wide range of accounts:\n• Conventional: Savings, Current, Time Deposit\n• Interest-Free: Wadiah, Amanah, Mudarabah\n• International: Foreign Currency, Diaspora\n• Corporate: Diaspora Account, Loan Packages\n\nFor full details, please visit our Services page.",
      link: "/services"
    })
  },
  {
    id: 'password_reset',
    keywords: ['password', 'username', 'reset', 'forgot'],
    response: (hotline) => ({
      text: `If you've forgotten your username or password, please call our 24/7 hotline at ${hotline} or email support@gadaabank.com.et for assistance. You can also visit any branch with your ID.`
    })
  },
  {
    id: 'balance_inquiry',
    keywords: ['balance', 'check balance', 'account balance'],
    response: () => ({
      text: "To check your account balance, please use our Gadaa Mobile App or Internet Banking. You can also visit any Gadaa Bank branch with your passbook or ID.",
      link: "/digital/mobile"
    })
  },
  {
    id: 'branch_hours',
    keywords: ['branch hours', 'branch time', 'branch open', 'work hours', 'working hours', 'branch schedule', 'when branch open'],
    response: (workingHours) => {
      if (workingHours && workingHours.length > 0) {
        const hoursText = workingHours.map(h => `${h.day}: ${h.time}`).join('\n');
        return {
          text: `Our regular branch hours are:\n${hoursText}\n\nHoliday hours may vary. Please call ahead or check our website for updates.`
        };
      }
      return {
        text: "Our branches are open Monday–Saturday, 8:30 AM – 5:30 PM. Closed on Sundays. For exact hours, please call our hotline 641."
      };
    }
  },
  {
    id: 'loan_products',
    keywords: ['loan products', 'what loans do you offer', 'loan types', 'types of loans'],
    response: () => ({
      text: "We offer Personal Loans, Business Loans, Mortgage Loans, Vehicle Loans, and Diaspora Loans. For specific requirements, interest rates, and documentation, please contact our Loan Department at loans@gadaabank.com.et or call +251 116392501.",
      link: "/services/personal-loans"
    })
  },
  {
    id: 'speak_to_human',
    keywords: ['human', 'agent', 'speak to someone', 'talk to person', 'customer service', 'real person'],
    response: (hotline, email) => ({
      text: `You can speak with a customer service representative 24/7 at ${hotline} or email ${email}. For loan or account‑specific queries, you can also visit your nearest branch.`,
      link: "/contact"
    })
  },
  {
    id: 'mobile_app',
    keywords: ['mobile app', 'download app', 'app download', 'gadaa app'],
    response: () => ({
      text: "You can download the Gadaa Mobile App from the Google Play Store or Apple App Store. For step‑by‑step setup instructions, please visit our Digital Banking page.",
      link: "/digital/mobile"
    })
  },
  {
    id: 'vision',
    keywords: ['vision'],
    response: () => ({
      text: "Our vision: 'To Inspire and Enable Your Dream.' We envision a future where every Ethiopian has access to financial tools that transform aspirations into reality.",
      link: '/about'
    })
  },
  {
    id: 'mission',
    keywords: ['mission'],
    response: () => ({
      text: "Our mission: 'We are committed to deliver superior and customer-centric full-fledged banking services to our community in a friendly environment by deploying competent employees and art-of-technology whilst optimizing shareholders' value.'",
      link: '/about'
    })
  },
  {
    id: 'founded',
    keywords: ['founded', 'established', 'when was bank established', 'when did bank start'],
    response: () => ({
      text: "Gadaa Bank was established with more than 28,000 founding shareholders. The founding shareholders meeting was in August 2021, and the bank earned its license on 26th April 2022. It began operations with over ETB 1.167 billion subscribed capital. The bank is often called 'New Generation's Bank' because over 90% of shareholders are young Ethiopians."
    })
  },
  {
    id: 'shareholders',
    keywords: ['shareholder', 'capital', 'share capital', 'number of shareholders'],
    response: () => ({
      text: "Gadaa Bank has over 32,000 shareholders and a total capital of more than 1.43 billion Birr. Over 90% of shareholders are young Ethiopians, reflecting our commitment to youth empowerment."
    })
  },
  {
    id: 'history',
    keywords: ['history', 'about bank', 'bank story'],
    response: () => ({
      text: "Gadaa Bank was established to contribute to economic empowerment of low- and medium-income Ethiopians. Founded by over 28,000 shareholders, we officially launched in 2022. We now have 110+ branches and 100+ banking products. Explore our full history at /about/company-history.",
      link: '/about/company-history'
    })
  },
  {
    id: 'board',
    keywords: ['board', 'director', 'board of directors'],
    response: (boardData) => {
      if (boardData && boardData.length) {
        const names = boardData.slice(0, 5).map(m => m.name).join(', ');
        return {
          text: `Our Board of Directors includes: ${names}${boardData.length > 5 ? ' and others' : ''}. View full list at /about/company-teams.`,
          link: '/about/company-teams'
        };
      }
      return {
        text: "You can view our Board of Directors at /about/company-teams.",
        link: '/about/company-teams'
      };
    }
  },
  {
    id: 'management',
    keywords: ['management', 'ceo', 'president'],
    response: (managementData) => {
      if (managementData && managementData.length) {
        const ceo = managementData.find(m => m.position?.toLowerCase().includes('ceo') || m.position?.toLowerCase().includes('president'));
        if (ceo) {
          return {
            text: `Our CEO is ${ceo.name}. The management team consists of ${managementData.length} members. See all at /about/management-team.`,
            link: '/about/management-team'
          };
        }
        return {
          text: `Our management team includes ${managementData.length} professionals. Visit /about/management-team for details.`,
          link: '/about/management-team'
        };
      }
      return {
        text: "You can find our management team at /about/management-team.",
        link: '/about/management-team'
      };
    }
  },
  {
    id: 'open_account',
    keywords: ['open account', 'account opening', 'how to open account'],
    response: () => ({
      text: "You can open an account online by visiting our onboarding portal. Click the link to start.",
      link: 'https://ibs.gadaabank.com.et/alpha-onboarding/get-started'
    })
  },
  {
    id: 'savings_account',
    keywords: ['savings account', 'saving account', 'saving rate'],
    response: () => ({
      text: "Our regular savings account offers 7% interest compounded monthly. Minimum opening balance is 50 ETB. Features: individual/joint accounts, mobile & internet banking, 24/7 access. Eligible: natural persons, legal entities, minors with guardians, special needs. Details at /services/conventional/saving-accounts.",
      link: '/services/conventional/saving-accounts'
    })
  },
  {
    id: 'current_account',
    keywords: ['current account'],
    response: () => ({
      text: "Current accounts are designed for businesses and individuals needing frequent transactions. They include cheques, overdraft facilities, and 24/7 access. Visit /services/conventional/current-accounts for more.",
      link: '/services/conventional/current-accounts'
    })
  },
  {
    id: 'time_deposit',
    keywords: ['time deposit', 'fixed deposit', 'term deposit'],
    response: () => ({
      text: "Time deposit accounts offer higher interest for fixed terms (minimum 3 months). Minimum deposit: 100,000 ETB. Interest rates are negotiable. Eligible: all natural and legal persons not on NBE maloperation list. Details at /services/conventional/time-deposit.",
      link: '/services/conventional/time-deposit'
    })
  },
  {
    id: 'personal_loan',
    keywords: ['personal loan'],
    response: () => ({
      text: "We offer personal loans with flexible repayment. Use our loan calculator to estimate EMI. Full details at /services/conventional/personal-loans.",
      link: '/services/conventional/personal-loans'
    })
  },
  {
    id: 'business_loan',
    keywords: ['business loan'],
    response: () => ({
      text: "Business loans tailored for SMEs and large enterprises. Check the calculator for estimates, or visit /services/conventional/business-loans for more.",
      link: '/services/conventional/business-loans'
    })
  },
  {
    id: 'guarantee',
    keywords: ['guarantee', 'bond', 'bid bond'],
    response: () => ({
      text: "We offer various bank guarantees: Bid Bond, Performance Bond, Advance Payment Guarantee, Suppliers Credit, Customs Duty, IATA, and more. These secure your business transactions. Full details at /services/conventional/guarantee-facilities.",
      link: '/services/conventional/guarantee-facilities'
    })
  },
  {
    id: 'forex',
    keywords: ['forex', 'foreign currency', 'exchange rate'],
    response: () => ({
      text: "We buy and sell foreign currency cash notes for travel, medical, education, and business purposes. Exchange rates are updated daily. Visit /services/international/forex for rates and requirements.",
      link: '/services/international/forex'
    })
  },
  {
    id: 'trade_finance',
    keywords: ['trade finance', 'letter of credit', 'lc', 'import', 'export'],
    response: () => ({
      text: "We offer comprehensive trade finance: Letter of Credit (LC), Cash Against Documents (CAD), Advance Payment, and more – compliant with ICC UCP 600 and NBE directives. Learn more at /services/international/trade-finance.",
      link: '/services/international/trade-finance'
    })
  },
  {
    id: 'money_transfer',
    keywords: ['money transfer', 'dahabshiil', 'ria'],
    response: () => ({
      text: "We partner with Dahabshiil and Ria Money Transfer for international money transfers. Send and receive funds worldwide. Details at /services/international/money-transfer.",
      link: '/services/international/money-transfer'
    })
  },
  {
    id: 'diaspora_accounts',
    keywords: ['diaspora', 'fcy account', 'foreign currency account'],
    response: () => ({
      text: "Our Diaspora accounts allow Ethiopians abroad to save in USD, GBP, or EUR. Options: Foreign Currency Savings, Fixed Time Deposit, Non-Resident Birr accounts. Minimum deposit USD 100 for individuals. Full details at /services/international/diaspora-fcy-products.",
      link: '/services/international/diaspora-fcy-products'
    })
  },
  {
    id: 'ifb_general',
    keywords: ['interest free', 'islamic', 'sharia'],
    response: () => ({
      text: "We offer Sharia‑compliant banking: Wadiah Savings (safe custody), Amanah Current, Mudarabah Savings, and Mudarabah Investment accounts. All are interest‑free and approved by our Sharia Advisory Board. Visit /interest-free for details.",
      link: '/interest-free'
    })
  },
  {
    id: 'wadiah',
    keywords: ['wadiah'],
    response: () => ({
      text: "Wadiah Savings is a safe custody account where your funds are kept with our guarantee of safety – no interest, just ethical banking. More at /interest-free/wadiah.",
      link: '/interest-free/wadiah'
    })
  },
  {
    id: 'amanah',
    keywords: ['amanah'],
    response: () => ({
      text: "Amanah Current Account is an interest‑free current account based on trust and honesty. Learn more at /interest-free/amanah.",
      link: '/interest-free/amanah'
    })
  },
  {
    id: 'mudarabah',
    keywords: ['mudarabah'],
    response: () => ({
      text: "Mudarabah accounts are profit‑sharing investment accounts where we manage your funds. Both savings and investment options are available. Visit /interest-free/mudarabah for details.",
      link: '/interest-free/mudarabah'
    })
  },
  {
    id: 'card_banking',
    keywords: ['card banking', 'debit card', 'credit card'],
    response: () => ({
      text: "We offer Visa and Mastercard debit/credit cards for local and international use. Manage your cards via mobile app. Learn more at /digital/card-banking.",
      link: '/digital/card-banking'
    })
  },
  {
    id: 'atm_service',
    keywords: ['atm service', 'atm use'],
    response: () => ({
      text: "Find ATMs near you using our ATM locator, or get information about our ATM services. Locator: /locators/atm.",
      link: '/locators/atm'
    })
  },
  {
    id: 'merchant',
    keywords: ['merchant payment'],
    response: () => ({
      text: "Merchant Payment solutions for businesses to accept card and digital payments. Visit /digital/merchant for details.",
      link: '/digital/merchant'
    })
  },
  {
    id: 'digital_banking',
    keywords: ['digital', 'mobile banking', 'internet banking'],
    response: () => ({
      text: "Our digital services include Mobile Banking, Internet Banking, Card Banking, ATM, and Merchant Payments. All are secure with bank‑level encryption. Explore at /digital.",
      link: '/digital'
    })
  },
  {
    id: 'corporate',
    keywords: ['corporate', 'ngo loan', 'institution loan'],
    response: () => ({
      text: "We offer tailored corporate loans: working capital, trade finance, project financing, and bulk staff loan packages for NGOs, institutions, and businesses. Contact corporate@gadaabank.com or visit /corporate for more.",
      link: '/corporate'
    })
  },
  {
    id: 'diaspora_loan',
    keywords: ['diaspora loan'],
    response: () => ({
      text: "Diaspora members can access personal loans, vehicle loans, mortgage loans, and working capital loans. Eligibility requires a diaspora account. More at /corporate/diaspora-loans.",
      link: '/corporate/diaspora-loans'
    })
  },
  {
    id: 'news',
    keywords: ['news'],
    response: () => ({
      text: "Stay updated with the latest news and announcements from Gadaa Bank. Visit our news page at /resources/news.",
      link: '/resources/news'
    })
  },
  {
    id: 'vacancy',
    keywords: ['vacancy', 'job', 'career'],
    response: () => ({
      text: "Current job openings and application instructions are available at /resources/vacancy. Check regularly for new positions.",
      link: '/resources/vacancy'
    })
  },
  {
    id: 'annual_report',
    keywords: ['annual report'],
    response: () => ({
      text: "You can download our annual reports from /resources/annual-report.",
      link: '/resources/annual-report'
    })
  },
  {
    id: 'fees',
    keywords: ['fee', 'tariff', 'charges', 'cost'],
    response: () => ({
      text: "Our service fees and tariffs are available in the Terms & Tariffs section. For example, fund transfers between own accounts are free; to other Gadaa accounts cost from 2 to 10 ETB; Telebirr transfers range from 3 to 50 ETB. See full details at /terms.",
      link: '/terms'
    })
  },
  {
    id: 'branch_locator',
    keywords: ['branch'],
    response: () => ({
      text: "Find a branch near you at /locators/branch.",
      link: '/locators/branch'
    })
  },
  {
    id: 'agent_locator',
    keywords: ['agent'],
    response: () => ({
      text: "Find banking agents at /locators/agent.",
      link: '/locators/agent'
    })
  },
  {
    id: 'atm_locator',
    keywords: ['atm locator', 'find atm', 'nearest atm'],
    response: () => ({
      text: "Find the nearest ATM at /locators/atm.",
      link: '/locators/atm'
    })
  },
  {
    id: 'contact',
    keywords: ['contact', 'call', 'phone', 'complaint'],
    response: (hotline, email) => ({
      text: `You can reach us 24/7 at ${hotline} or email ${email}. You can also submit a complaint via the contact page.`,
      link: '/contact'
    })
  },
  {
    id: 'general_services',
    keywords: ['service', 'product'],
    response: () => ({
      text: "We offer a wide range of products: Conventional Banking, International Banking, Interest Free Banking, Corporate Banking, and more. Explore all at /services.",
      link: '/services'
    })
  },
  {
    id: 'interest_rate_generic',
    keywords: ['interest rate', 'saving rate'],
    response: () => ({
      text: "Our regular savings account offers 7% interest compounded monthly. You can check other accounts on our services page.",
      link: '/services/saving-accounts'
    })
  }
];