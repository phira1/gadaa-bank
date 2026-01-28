import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/Layout/MainLayout'
import HomePage from './pages/Home/HomePage'

// About Pages
import AboutPage from './pages/About/AboutPage'
import CompanyHistory from './pages/About/CompanyHistory'
import OrganizationalStructure from './pages/About/OrganizationalStructure'
import CompanyTeams from './pages/About/CompanyTeams'
import OtherProfiles from './pages/About/OtherProfiles'

// Services Pages
import ServicesPage from './pages/Services/ServicesPage'

// Conventional Banking - Individual Service Pages
import SavingAccounts from './pages/Services/Conventional/SavingAccounts'
import CurrentAccounts from './pages/Services/Conventional/CurrentAccounts'
import TimeDeposit from './pages/Services/Conventional/TimeDeposit'
import PersonalLoans from './pages/Services/Conventional/PersonalLoans'
import BusinessLoans from './pages/Services/Conventional/BusinessLoans'
import GuaranteeFacilities from './pages/Services/Conventional/GuaranteeFacilities'

// International Banking - Individual Service Pages
import ForexService from './pages/Services/International/ForexService'
import TradeFinance from './pages/Services/International/TradeFinance'
import MoneyTransfer from './pages/Services/International/MoneyTransfer'

// Interest Free Banking - Individual Service Pages
import DepositProduct from './pages/Services/InterestFree/DepositProduct'
import WadiahSaving from './pages/Services/InterestFree/WadiahSaving'
import Amanah from './pages/Services/InterestFree/Amanah'
import MudarabahSavingAccounts from './pages/Services/InterestFree/MudarabahSavingAccounts'
import FinancingInvestment from './pages/Services/InterestFree/FinancingInvestment'
import OtherServices from './pages/Services/InterestFree/OtherServices'

// Corporate Banking - Individual Service Pages
import DiasporaAccount from './pages/Services/Corporate/DiasporaAccount'
import DiasporaLoanFacilities from './pages/Services/Corporate/DiasporaLoanFacilities'
import NgoCorporateLoanPackages from './pages/Services/Corporate/NgoCorporateLoanPackages'

// Digital Pages
import DigitalPage from './pages/Digital/DigitalPage'
import MobileBanking from './pages/Digital/MobileBanking'
import InternetBanking from './pages/Digital/InternetBanking'
import CardBanking from './pages/Digital/CardBanking'
import ATMPage from './pages/Digital/ATMPage'
import MerchantPage from './pages/Digital/MerchantPage'

// Resources Pages
import ResourcesPage from './pages/Resources/ResourcesPage'
import NewsPage from './pages/Resources/NewsPage'
import VacancyPage from './pages/Resources/VacancyPage'
import AnnualReportPage from './pages/Resources/AnnualReportPage'

// Investors Pages
import InvestorsPage from './pages/Investors/InvestorsPage'
import ProspectusPage from './pages/Investors/ProspectusPage'
import FinancialReportsPage from './pages/Investors/FinancialReportsPage'
import ShareholderEventsPage from './pages/Investors/ShareholderEventsPage'
import PressReleasesPage from './pages/Investors/PressReleasesPage'
import InvestorContactPage from './pages/Investors/InvestorContactPage'

// Other Pages
import TermsPage from './pages/Terms/TermsPage'
import ContactPage from './pages/Contact/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Route */}
        <Route index element={<HomePage />} />
        
        {/* About Us Routes */}
        <Route path="about" element={<AboutPage />} />
        <Route path="about/company-history" element={<CompanyHistory />} />
        <Route path="about/organizational-structure" element={<OrganizationalStructure />} />
        <Route path="about/company-teams" element={<CompanyTeams />} />
        <Route path="about/other-profiles" element={<OtherProfiles />} />
        
        {/* Services Routes */}
        <Route path="services" element={<ServicesPage />} />
        
        {/* Conventional Banking - Individual Services */}
        <Route path="services/saving-accounts" element={<SavingAccounts />} />
        <Route path="services/current-accounts" element={<CurrentAccounts />} />
        <Route path="services/time-deposit" element={<TimeDeposit />} />
        <Route path="services/personal-loans" element={<PersonalLoans />} />
        <Route path="services/business-loans" element={<BusinessLoans />} />
        <Route path="services/guarantee-facilities" element={<GuaranteeFacilities />} />
        
        {/* International Banking - Individual Services */}
        <Route path="services/forex-service" element={<ForexService />} />
        <Route path="services/trade-finance" element={<TradeFinance />} />
        <Route path="services/money-transfer" element={<MoneyTransfer />} />
        
        {/* Interest Free Banking - Individual Services */}
        <Route path="services/deposit-product" element={<DepositProduct />} />
        <Route path="services/wadiah-saving" element={<WadiahSaving />} />
        <Route path="services/amanah" element={<Amanah />} />
        <Route path="services/mudarabah-saving-accounts" element={<MudarabahSavingAccounts />} />
        <Route path="services/financing-investment" element={<FinancingInvestment />} />
        <Route path="services/other-services" element={<OtherServices />} />
        
        {/* Corporate Banking - Individual Services */}
        <Route path="services/diaspora-account" element={<DiasporaAccount />} />
        <Route path="services/diaspora-loan-facilities" element={<DiasporaLoanFacilities />} />
        <Route path="services/ngo-corporate-loan-packages" element={<NgoCorporateLoanPackages />} />
        
        {/* Digital Routes */}
        <Route path="digital" element={<DigitalPage />} />
        <Route path="digital/mobile-banking" element={<MobileBanking />} />
        <Route path="digital/internet-banking" element={<InternetBanking />} />
        <Route path="digital/card-banking" element={<CardBanking />} />
        <Route path="digital/atm" element={<ATMPage />} />
        <Route path="digital/merchant" element={<MerchantPage />} />
        
        {/* Resources Routes */}
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/news" element={<NewsPage />} />
        <Route path="resources/vacancy" element={<VacancyPage />} />
        <Route path="resources/annual-report" element={<AnnualReportPage />} />
        
        {/* Investors Routes */}
        <Route path="investors" element={<InvestorsPage />} />
        <Route path="investors/prospectus" element={<ProspectusPage />} />
        <Route path="investors/financial-reports" element={<FinancialReportsPage />} />
        <Route path="investors/shareholder-events" element={<ShareholderEventsPage />} />
        <Route path="investors/press-releases" element={<PressReleasesPage />} />
        <Route path="investors/contact" element={<InvestorContactPage />} />
        
        {/* Other Routes */}
        <Route path="terms" element={<TermsPage />} />
        <Route path="contact" element={<ContactPage />} />
        
        {/* Fallback/404 Route */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App