import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Pages/Layout/MainLayout'  // CHANGED: capital P
import HomePage from './Pages/Home/HomePage'  // CHANGED: capital P

// About Pages
import AboutPage from './Pages/About/AboutPage'  // CHANGED: capital P
import CompanyHistory from './Pages/About/CompanyHistory'  // CHANGED: capital P
import OrganizationalStructure from './Pages/About/OrganizationalStructure'  // CHANGED: capital P
import CompanyTeams from './Pages/About/CompanyTeams'  // CHANGED: capital P
import OtherProfiles from './Pages/About/OtherProfiles'  // CHANGED: capital P

// Services Pages
import ServicesPage from './Pages/Services/ServicesPage'  // CHANGED: capital P

// Conventional Banking - Individual Service Pages
import SavingAccounts from './Pages/Services/Conventional/SavingAccounts'  // CHANGED: capital P
import CurrentAccounts from './Pages/Services/Conventional/CurrentAccounts'  // CHANGED: capital P
import TimeDeposit from './Pages/Services/Conventional/TimeDeposit'  // CHANGED: capital P
import PersonalLoans from './Pages/Services/Conventional/PersonalLoans'  // CHANGED: capital P
import BusinessLoans from './Pages/Services/Conventional/BusinessLoans'  // CHANGED: capital P
import GuaranteeFacilities from './Pages/Services/Conventional/GuaranteeFacilities'  // CHANGED: capital P

// International Banking - Individual Service Pages
import ForexService from './Pages/Services/International/ForexService'  // CHANGED: capital P
import TradeFinance from './Pages/Services/International/TradeFinance'  // CHANGED: capital P
import MoneyTransfer from './Pages/Services/International/MoneyTransfer'  // CHANGED: capital P

// Interest Free Banking - Individual Service Pages
import DepositProduct from './Pages/Services/InterestFree/DepositProduct'  // CHANGED: capital P
import WadiahSaving from './Pages/Services/InterestFree/WadiahSaving'  // CHANGED: capital P
import Amanah from './Pages/Services/InterestFree/Amanah'  // CHANGED: capital P
import MudarabahSavingAccounts from './Pages/Services/InterestFree/MudarabahSavingAccounts'  // CHANGED: capital P
import FinancingInvestment from './Pages/Services/InterestFree/FinancingInvestment'  // CHANGED: capital P
import OtherServices from './Pages/Services/InterestFree/OtherServices'  // CHANGED: capital P

// Corporate Banking - Individual Service Pages
import DiasporaAccount from './Pages/Services/Corporate/DiasporaAccount'  // CHANGED: capital P
import DiasporaLoanFacilities from './Pages/Services/Corporate/DiasporaLoanFacilities'  // CHANGED: capital P
import NgoCorporateLoanPackages from './Pages/Services/Corporate/NgoCorporateLoanPackages'  // CHANGED: capital P

// Digital Pages
import DigitalPage from './Pages/Digital/DigitalPage'  // CHANGED: capital P
import MobileBanking from './Pages/Digital/MobileBanking'  // CHANGED: capital P
import InternetBanking from './Pages/Digital/InternetBanking'  // CHANGED: capital P
import CardBanking from './Pages/Digital/CardBanking'  // CHANGED: capital P
import ATMPage from './Pages/Digital/ATMPage'  // CHANGED: capital P
import MerchantPage from './Pages/Digital/MerchantPage'  // CHANGED: capital P

// Resources Pages
import ResourcesPage from './Pages/Resources/ResourcesPage'  // CHANGED: capital P
import NewsPage from './Pages/Resources/NewsPage'  // CHANGED: capital P
import VacancyPage from './Pages/Resources/VacancyPage'  // CHANGED: capital P
import AnnualReportPage from './Pages/Resources/AnnualReportPage'  // CHANGED: capital P

// Investors Pages
import InvestorsPage from './Pages/Investors/InvestorsPage'  // CHANGED: capital P
import ProspectusPage from './Pages/Investors/ProspectusPage'  // CHANGED: capital P
import FinancialReportsPage from './Pages/Investors/FinancialReportsPage'  // CHANGED: capital P
import ShareholderEventsPage from './Pages/Investors/ShareholderEventsPage'  // CHANGED: capital P
import PressReleasesPage from './Pages/Investors/PressReleasesPage'  // CHANGED: capital P
import InvestorContactPage from './Pages/Investors/InvestorContactPage'  // CHANGED: capital P

// Other Pages
import TermsPage from './Pages/Terms/TermsPage'  // CHANGED: capital P
import ContactPage from './Pages/Contact/ContactPage'  // CHANGED: capital P

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