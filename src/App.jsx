import React from 'react'
import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import MainLayout from './Pages/Layout/MainLayout'
import HomePage from './Pages/Home/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import AdminLayout from './Pages/Admin/AdminLayout'
import AdminLoginPage from './Pages/Admin/AdminLoginPage'
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage'
import AdminContentPage from './Pages/Admin/AdminContentPage'
import AdminLocationsPage from './Pages/Admin/AdminLocationsPage'
import AdminBoardPage from './Pages/Admin/AdminBoardPage'
import AdminShariaCommitteePage from './Pages/Admin/AdminShariaCommitteePage'
import AdminManagementPage from './Pages/Admin/AdminManagementPage'
import AdminPartnersPage from './Pages/Admin/AdminPartnersPage'
import AdminReportsPage from './Pages/Admin/AdminReportsPage'
import AdminStatsPage from './Pages/Admin/AdminStatsPage'
import AdminProductComparisonPage from './Pages/Admin/AdminProductComparisonPage'
import ErrorBoundary from './components/ErrorBoundary'

// About Pages
import AboutPage from './Pages/About/AboutPage'
import CompanyHistory from './Pages/About/CompanyHistory'
import OrganizationalStructure from './Pages/About/OrganizationalStructure'
import CompanyTeams from './Pages/About/CompanyTeams'
import ManagementTeam from './Pages/About/ManagementTeam'
import OtherProfiles from './Pages/About/OtherProfiles'
import PartnersPage from './Pages/About/PartnersPage'

// Services Pages
import ServicesPage from './Pages/Services/ServicesPage'

// Conventional Banking
import SavingAccounts from './Pages/Services/Conventional/SavingAccounts'
import CurrentAccounts from './Pages/Services/Conventional/CurrentAccounts'
import TimeDeposit from './Pages/Services/Conventional/TimeDeposit'
import PersonalLoans from './Pages/Services/Conventional/PersonalLoans'
import BusinessLoans from './Pages/Services/Conventional/BusinessLoans'
import GuaranteeFacilities from './Pages/Services/Conventional/GuaranteeFacilities'

// International Banking
import ForexService from './Pages/Services/International/ForexService'
import TradeFinance from './Pages/Services/International/TradeFinance'
import MoneyTransfer from './Pages/Services/International/MoneyTransfer'
import DiasporaFcyProducts from './Pages/Services/International/DiasporaFcyProducts'
import CorrespondentAccounts from './Pages/Services/International/CorrespondentAccounts'

// Interest Free Banking
import DepositProduct from './Pages/Services/InterestFree/DepositProduct'
import WadiahSaving from './Pages/Services/InterestFree/WadiahSaving'
import Amanah from './Pages/Services/InterestFree/Amanah'
import MudarabahSavingAccounts from './Pages/Services/InterestFree/MudarabahSavingAccounts'
import FinancingInvestment from './Pages/Services/InterestFree/FinancingInvestment'
import OtherServices from './Pages/Services/InterestFree/OtherServices'

// Corporate Banking
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
import NewsDetailPage from './Pages/Resources/NewsDetailPage'
import VacancyPage from './Pages/Resources/VacancyPage'
import AnnualReportPage from './Pages/Resources/AnnualReportPage'
import SecurityAwarenessPage from './Pages/Resources/SecurityAwarenessPage'
import NBERequirementsPage from './Pages/Resources/NBERequirementsPage'
import SitemapPage from './Pages/Resources/SitemapPage'

// Investors Pages
import InvestorsPage from './Pages/Investors/InvestorsPage'
import ProspectusPage from './Pages/Investors/ProspectusPage'
import FinancialReportsPage from './Pages/Investors/FinancialReportsPage'
import ShareholderEventsPage from './Pages/Investors/ShareholderEventsPage'
import PressReleasesPage from './Pages/Investors/PressReleasesPage'
import InvestorContactPage from './Pages/Investors/InvestorContactPage'
import MOAPage from './Pages/Investors/MOAPage'

// Other Pages
import TermsPage from './Pages/Terms/TermsPage'
import ContactPage from './Pages/Contact/ContactPage'
import ComplaintFormPage from './Pages/Contact/ComplaintFormPage'
import CommunityPage from './Pages/Community/CommunityPage'

// Locator Pages
import ATMLocator from './Pages/Locator/ATMLocator'
import BranchLocator from './Pages/Locator/BranchLocator'
import AgentLocator from './Pages/Locator/AgentLocator'

// Tools Pages
import ToolsPage from './Pages/Tools/ToolsPage'                     // NEW
import LoanCalculatorPage from './Pages/Tools/LoanCalculatorPage'
import ProductComparisonPage from './Pages/Tools/ProductComparisonPage'

function NewsDetailRedirect() {
  const { id } = useParams();

  return <Navigate to={`/resources/news/${id}`} replace />;
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="content" element={<AdminContentPage />} />
          <Route path="locations" element={<AdminLocationsPage />} />
          <Route path="board" element={<AdminBoardPage />} />
          <Route path="sharia-committee" element={<AdminShariaCommitteePage />} />
          <Route path="management" element={<AdminManagementPage />} />
          <Route path="partners" element={<AdminPartnersPage />} />
          <Route path="reports" element={<AdminReportsPage />} />
          <Route path="stats" element={<AdminStatsPage />} />
          <Route path="product-comparison" element={<AdminProductComparisonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<HomePage />} />
        
        {/* About Us Routes */}
        <Route path="about" element={<AboutPage />} />
        <Route path="about/company-history" element={<CompanyHistory />} />
        <Route path="about/organizational-structure" element={<OrganizationalStructure />} />
        <Route path="about/company-teams" element={<CompanyTeams />} />
        <Route path="about/management-team" element={<ManagementTeam />} />
        <Route path="about/other-profiles" element={<OtherProfiles />} />
        <Route path="about/partners" element={<PartnersPage />} />
        
        {/* Services Routes */}
        <Route path="services" element={<ServicesPage />} />
        
        {/* Conventional Banking */}
        <Route path="services/saving-accounts" element={<SavingAccounts />} />
        <Route path="services/current-accounts" element={<CurrentAccounts />} />
        <Route path="services/time-deposit" element={<TimeDeposit />} />
        <Route path="services/personal-loans" element={<PersonalLoans />} />
        <Route path="services/business-loans" element={<BusinessLoans />} />
        <Route path="services/guarantee-facilities" element={<GuaranteeFacilities />} />
        
        {/* International Banking */}
        <Route path="services/forex-service" element={<ForexService />} />
        <Route path="services/trade-finance" element={<TradeFinance />} />
        <Route path="services/money-transfer" element={<MoneyTransfer />} />
        <Route path="services/diaspora-fcy-products" element={<DiasporaFcyProducts />} />
        <Route path="services/correspondent-accounts" element={<CorrespondentAccounts />} />
        
        {/* Interest Free Banking */}
        <Route path="services/deposit-product" element={<DepositProduct />} />
        <Route path="services/wadiah-saving" element={<WadiahSaving />} />
        <Route path="services/amanah" element={<Amanah />} />
        <Route path="services/mudarabah-saving-accounts" element={<MudarabahSavingAccounts />} />
        <Route path="services/financing-investment" element={<FinancingInvestment />} />
        <Route path="services/other-services" element={<OtherServices />} />
        
        {/* Corporate Banking */}
        <Route path="services/diaspora-account" element={<DiasporaAccount />} />
        <Route path="services/diaspora-loan-facilities" element={<DiasporaLoanFacilities />} />
        <Route path="services/ngo-corporate-loan-packages" element={<NgoCorporateLoanPackages />} />
        
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
        <Route path="resources/news/:id" element={<NewsDetailPage />} />
        <Route path="news" element={<Navigate to="/resources/news" replace />} />
        <Route path="news/:id" element={<NewsDetailRedirect />} />
        <Route path="resources/vacancy" element={<VacancyPage />} />
        <Route path="resources/annual-report" element={<AnnualReportPage />} />
        <Route path="resources/security-awareness" element={<SecurityAwarenessPage />} />
        <Route path="resources/nbe-requirements" element={<NBERequirementsPage />} />
        
        {/* Investors Routes */}
        <Route path="investors" element={<InvestorsPage />} />
        <Route path="investors/prospectus" element={<ProspectusPage />} />
        <Route path="investors/financial-reports" element={<FinancialReportsPage />} />
        <Route path="investors/shareholder-events" element={<ShareholderEventsPage />} />
        <Route path="investors/press-releases" element={<PressReleasesPage />} />
        <Route path="investors/contact" element={<InvestorContactPage />} />
        <Route path="investors/moa" element={<MOAPage />} />
        
        {/* Locator Routes */}
        <Route path="locators/atm" element={<ATMLocator />} />
        <Route path="locators/branch" element={<BranchLocator />} />
        <Route path="locators/agent" element={<AgentLocator />} />
        
        {/* Tools Routes */}
        <Route path="tools" element={<ToolsPage />} />                         {/* NEW */}
        <Route path="tools/loan-calculator" element={<LoanCalculatorPage />} />
        <Route path="tools/compare-products" element={<ProductComparisonPage />} />
        
        {/* Other Routes */}
        <Route path="terms" element={<TermsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact/complaint" element={<ComplaintFormPage />} />
        
        {/* Sitemap Route */}
        <Route path="sitemap" element={<SitemapPage />} />

          {/* Fallback/404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App