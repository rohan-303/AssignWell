import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { AssignmentsPage } from "./pages/AssignmentsPage";
import { WellBeingPage } from "./pages/WellBeingPage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/assignments" element={<AssignmentsPage />} />
      <Route path="/wellbeing" element={<WellBeingPage />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
