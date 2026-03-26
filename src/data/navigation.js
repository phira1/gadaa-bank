export const navItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    hasDropdown: false
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Company History', path: '/about/company-history' },
      { label: 'Organizational Structure', path: '/about/organizational-structure' },
      {
        label: 'Company Teams',
        path: '/about/company-teams',
        subItems: [
          { label: 'Board of Directors', path: '/about/company-teams#board' },
          { label: 'Management Team', path: '/about/company-teams#management' }
        ]
      },
      {
        label: 'Other Profiles',
        path: '/about/other-profiles',
        subItems: [
          { label: 'Sharia Advisory Committee', path: '/about/other-profiles#sharia' },
          { label: 'Social Responsibility', path: '/about/other-profiles#responsibility' }
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'Product & Service',
    path: '/services',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Conventional Banking',
        path: '/services',
        subItems: [
          { label: 'Saving Accounts', path: '/services/saving-accounts' },
          { label: 'Current Accounts', path: '/services/current-accounts' },
          { label: 'Time Deposit', path: '/services/time-deposit' },
          { label: 'Personal Loans', path: '/services/personal-loans' },
          { label: 'Business Loans', path: '/services/business-loans' },
          { label: 'Guarantee Facilities', path: '/services/guarantee-facilities' }
        ]
      },
      {
        label: 'International Banking',
        path: '/services',
        subItems: [
          { label: 'Forex Service', path: '/services/forex-service' },
          { label: 'Trade Finance', path: '/services/trade-finance' },
          { label: 'Money Transfer', path: '/services/money-transfer' },
          { label: 'Diaspora & FCY Products', path: '/services/diaspora-fcy-products' },
          { label: 'Correspondent Accounts', path: '/services/correspondent-accounts' }
        ]
      },
      {
        label: 'Interest Free Banking',
        path: '/services',
        subItems: [
          { label: 'Deposit product', path: '/services/deposit-product' },
          { label: 'Wadiah Saving', path: '/services/wadiah-saving' },
          { label: 'Amanah', path: '/services/amanah' },
          { label: 'Mudarabah Saving Accounts', path: '/services/mudarabah-saving-accounts' },
          { label: 'Financing & investment', path: '/services/financing-investment' },
          { label: 'Other Services', path: '/services/other-services' }
        ]
      },
      {
        label: 'Corporate Banking Service',
        path: '/services',
        subItems: [
          { label: 'Diaspora Account', path: '/services/diaspora-account' },
          { label: 'Diaspora Loan Facilities', path: '/services/diaspora-loan-facilities' },
          { label: "NGO's, Institutions & Corporate Loan Packages", path: '/services/ngo-corporate-loan-packages' }
        ]
      },
      { label: 'Digital Banking', path: '/digital' }
    ]
  },
  {
    id: 'community',
    label: 'Community Banking',
    path: '/community',
    hasDropdown: false
  },
  {
    id: 'digital',
    label: 'Digital',
    path: '/digital',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Mobile Banking', path: '/digital/mobile-banking' },
      { label: 'Internet Banking', path: '/digital/internet-banking' },
      { label: 'Card Banking', path: '/digital/card-banking' },
      { label: 'ATM', path: '/digital/atm' },
      { label: 'Merchant', path: '/digital/merchant' }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    path: '/resources',
    hasDropdown: true,
    dropdownItems: [
      { label: 'News', path: '/resources/news' },
      { label: 'Vacancy', path: '/resources/vacancy' },
      { label: 'Annual Report', path: '/resources/annual-report' }
    ]
  },
  {
    id: 'investors',
    label: 'Investors Relation',
    path: '/investors',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Prospectus', path: '/investors/prospectus' },
      { label: 'Financial Reports and Statements', path: '/investors/financial-reports' },
      { label: 'Shareholder events', path: '/investors/shareholder-events' },
      { label: 'Press Releases', path: '/investors/press-releases' },
      { label: 'Contact Information', path: '/investors/contact' }
    ]
  },
  {
    id: 'terms',
    label: 'Term and Tariff',
    path: '/terms',
    hasDropdown: false
  },
  {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
    hasDropdown: false
  }
];