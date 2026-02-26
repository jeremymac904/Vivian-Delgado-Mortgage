import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CalculatorPage from './pages/CalculatorPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';
import LoanOptionsPage from './pages/LoanOptionsPage';
import ConventionalPage from './pages/loan-programs/ConventionalPage';
import FhaPage from './pages/loan-programs/FhaPage';
import VaPage from './pages/loan-programs/VaPage';
import UsdaPage from './pages/loan-programs/UsdaPage';
import JumboPage from './pages/loan-programs/JumboPage';
import RefinancePage from './pages/loan-programs/RefinancePage';
import AboutJeremyPage from './pages/AboutJeremyPage';
import DigitalBusinessCardTemplatePage from './pages/DigitalBusinessCardTemplatePage';
import TeamMemberCardPage from './pages/TeamMemberCardPage';
import DscrPage from './pages/loan-programs/DscrPage';
import FixFlipPage from './pages/loan-programs/FixFlipPage';
import GroundUpConstructionPage from './pages/loan-programs/GroundUpConstructionPage';
import Fha203kPage from './pages/loan-programs/Fha203kPage';
import HomeReadyPage from './pages/loan-programs/HomeReadyPage';
import HomePossiblePage from './pages/loan-programs/HomePossiblePage';
import ItinPage from './pages/loan-programs/ItinPage';
import BankStatementPage from './pages/loan-programs/BankStatementPage';
import HelocPrimaryPage from './pages/loan-programs/HelocPrimaryPage';
import HelocInvestmentPage from './pages/loan-programs/HelocInvestmentPage';
import InvestorHubPage from './pages/InvestorHubPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import IdxSearchPage from './pages/IdxSearchPage';
import HomeValuationPage from './pages/HomeValuationPage';
import OpenHousesPage from './pages/OpenHousesPage';
import MarketReportPage from './pages/MarketReportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/apply" element={<Navigate to="/en/apply" replace />} />
        <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
        <Route path="/calculator" element={<Navigate to="/en/calculator" replace />} />
        <Route path="/reviews" element={<Navigate to="/en/reviews" replace />} />
        <Route path="/about/*" element={<Navigate to="/en/about" replace />} />
        <Route path="/team/*" element={<Navigate to="/en/team" replace />} />
        <Route path="/loan-options/*" element={<Navigate to="/en/loan-options" replace />} />
        <Route path="/blog" element={<Navigate to="/en/blog" replace />} />
        <Route path="/property-search" element={<Navigate to="/en/property-search" replace />} />
        <Route path="/buscar-propiedades" element={<Navigate to="/es/buscar-propiedades" replace />} />
        <Route path="/home-value" element={<Navigate to="/en/home-value" replace />} />
        <Route path="/valor-de-casa" element={<Navigate to="/es/valor-de-casa" replace />} />
        <Route path="/open-houses" element={<Navigate to="/en/open-houses" replace />} />
        <Route path="/casas-abiertas" element={<Navigate to="/es/casas-abiertas" replace />} />
        <Route path="/market-report" element={<Navigate to="/en/market-report" replace />} />
        <Route path="/informe-del-mercado" element={<Navigate to="/es/informe-del-mercado" replace />} />
        <Route path="/:locale" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="loan-options" element={<LoanOptionsPage />} />
          <Route path="loan-options/conventional" element={<ConventionalPage />} />
          <Route path="loan-options/fha" element={<FhaPage />} />
          <Route path="loan-options/va" element={<VaPage />} />
          <Route path="loan-options/usda" element={<UsdaPage />} />
          <Route path="loan-options/jumbo" element={<JumboPage />} />
          <Route path="loan-options/refinance" element={<RefinancePage />} />
          <Route path="loan-options/dscr" element={<DscrPage />} />
          <Route path="loan-options/fix-flip" element={<FixFlipPage />} />
          <Route path="loan-options/ground-up-construction" element={<GroundUpConstructionPage />} />
          <Route path="loan-options/fha-203k" element={<Fha203kPage />} />
          <Route path="loan-options/homeready" element={<HomeReadyPage />} />
          <Route path="loan-options/home-possible" element={<HomePossiblePage />} />
          <Route path="loan-options/itin" element={<ItinPage />} />
          <Route path="loan-options/bank-statement" element={<BankStatementPage />} />
          <Route path="loan-options/heloc-primary" element={<HelocPrimaryPage />} />
          <Route path="loan-options/heloc-investment" element={<HelocInvestmentPage />} />
          <Route path="investors" element={<InvestorHubPage />} />
          <Route path="inversionistas" element={<InvestorHubPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/jeremy-mcdonald" element={<Navigate to="../about/vivian-delgado" replace />} />
          <Route path="about/vivian-delgado" element={<AboutJeremyPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/digital-business-card" element={<DigitalBusinessCardTemplatePage />} />
          <Route path="team/:slug" element={<TeamMemberCardPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="property-search" element={<IdxSearchPage />} />
          <Route path="buscar-propiedades" element={<IdxSearchPage />} />
          <Route path="home-value" element={<HomeValuationPage />} />
          <Route path="valor-de-casa" element={<HomeValuationPage />} />
          <Route path="open-houses" element={<OpenHousesPage />} />
          <Route path="casas-abiertas" element={<OpenHousesPage />} />
          <Route path="market-report" element={<MarketReportPage />} />
          <Route path="informe-del-mercado" element={<MarketReportPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply" element={<ApplyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
