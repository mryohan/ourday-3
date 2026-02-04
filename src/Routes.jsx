import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AdminDashboard from './pages/admin-dashboard';
import RSVPManagement from './pages/rsvp-management';
import WeddingInvitationDisplay from './pages/wedding-invitation-display';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<WeddingInvitationDisplay />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/rsvp-management" element={<RSVPManagement />} />
        <Route path="/wedding-invitation-display" element={<WeddingInvitationDisplay />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
