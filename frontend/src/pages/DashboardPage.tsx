import React from "react";
import { CalendarPanel } from "../components/dashboard/CalendarPanel";
import { InsightsPanel } from "../components/dashboard/InsightsPanel";
import { TasksPanel } from "../components/dashboard/TasksPanel";
import { WellBeingStrip } from "../components/dashboard/WellBeingStrip";
import { SocialPulseCard } from "../components/dashboard/SocialPulseCard";
import { AIChatWidget } from "../components/dashboard/AIChatWidget";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="col" style={{ gap: 18 }}>
        {/* Row 1: Calendar + Insights */}
        <div className="row">
          <div style={{ flex: 1.4 }}>
            <CalendarPanel />
          </div>
          <div style={{ flex: 1.1 }}>
            <InsightsPanel />
          </div>
        </div>

        {/* Row 2: Tasks + Well-Being + Social Pulse */}
        <div className="row">
          <div style={{ flex: 1.4 }}>
            <TasksPanel />
          </div>
          <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: 16 }}>
            <WellBeingStrip />
            <SocialPulseCard />
          </div>
        </div>
      </div>

      <AIChatWidget />
    </>
  );
};
