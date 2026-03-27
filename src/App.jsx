import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Pages/Layout/MainLayout'
import HomePage from './Pages/Home/HomePage'

// About Pages
import AboutPage from './Pages/About/AboutPage'
import CompanyHistory from './Pages/About/CompanyHistory'
import OrganizationalStructure from './Pages/About/OrganizationalStructure'
import CompanyTeams from './Pages/About/CompanyTeams'          // Board of Directors
import ManagementTeam from './Pages/About/ManagementTeam'    // NEW
import OtherProfiles from './Pages/About/OtherProfiles'

// Services Pages
import ServicesPage from './Pages/Services/ServicesPage'

// Conventional Banking - Individual Service Pages
import SavingAccounts from './Pages/Services/Conventional/SavingAccounts'
import CurrentAccounts from './Pages/Services/Conventional/CurrentAccounts'
import TimeDeposit from './Pages/Services/Conventional/TimeDeposit'
import PersonalLoans from './Pages/Services/Conventional/PersonalLoans'
import BusinessLoans from './Pages/Services/Conventional/BusinessLoans'
import GuaranteeFacilities from './Pages/Services/Conventional/GuaranteeFacilities'

// International Banking - Individual Service Pages
import ForexService from './Pages/Services/International/ForexService'
import TradeFinance from './Pages/Services/International/TradeFinance'
import MoneyTransfer from './Pages/Services/International/MoneyTransfer'
import DiasporaFcyProducts from './Pages/Services/International/DiasporaFcyProducts'
import CorrespondentAccounts from './Pages/Services/International/CorrespondentAccounts'

// Interest Free Banking - Individual Service Pages
import DepositProduct from './Pages/Services/InterestFree/DepositProduct'
import WadiahSaving from './Pages/Services/InterestFree/WadiahSaving'
import Amanah from './Pages/Services/InterestFree/Amanah'
import MudarabahSavingAccounts from './Pages/Services/InterestFree/MudarabahSavingAccounts'
import FinancingInvestment from './Pages/Services/InterestFree/FinancingInvestment'
import OtherServices from './Pages/Services/InterestFree/OtherServices'

// Corporate Banking - Individual Service Pages
import DiasporaAccount from './Pages/Services/Corporate/DiasporaAccount'
import DiasporaLoanFacilities from './Pages/Services/Corporate/DiasporaLoanFacilities'
import NgoCorporateLoanPackages from './Pages/Services/Corporate/NgoCorporateLoanPackages'

// Digital Pages
import DigitalPage from './Pages/Digital/DigitalPage'
import MobileBanking from './Pages/Digital/MobileBanking'
import InternetBanking from './Pages/Digital/InternetBanking'
import CardBanking from './Pages/Digital/CardBanking'
import ATMPage from './Pages/Digital/ATMPage'
import MerchantPage from './Pages/Digital/MerchantPage'

// Resources Pages
import ResourcesPage from './Pages/Resources/ResourcesPage'
import NewsPage from './Pages/Resources/NewsPage'
import VacancyPage from './Pages/Resources/VacancyPage'
import AnnualReportPage from './Pages/Resources/AnnualReportPage'

// Investors Pages
import InvestorsPage from './Pages/Investors/InvestorsPage'
import ProspectusPage from './Pages/Investors/ProspectusPage'
import FinancialReportsPage from './Pages/Investors/FinancialReportsPage'
import ShareholderEventsPage from './Pages/Investors/ShareholderEventsPage'
import PressReleasesPage from './Pages/Investors/PressReleasesPage'
import InvestorContactPage from './Pages/Investors/InvestorContactPage'

// Other Pages
import TermsPage from './Pages/Terms/TermsPage'
import ContactPage from './Pages/Contact/ContactPage'
import CommunityPage from './Pages/Community/CommunityPage'

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
        <Route path="about/company-teams" element={<CompanyTeams />} />        {/* Board of Directors */}
        <Route path="about/management-team" element={<ManagementTeam />} />   {/* NEW: Management Team */}
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
        <Route path="services/diaspora-fcy-products" element={<DiasporaFcyProducts />} />
        <Route path="services/correspondent-accounts" element={<CorrespondentAccounts />} />
        
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
        
        {/* Community Banking */}
        <Route path="community" element={<CommunityPage />} />
        
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