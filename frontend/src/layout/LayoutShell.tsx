import React from "react";
import { TopNav } from "./TopNav";

interface LayoutShellProps {
  children: React.ReactNode;
}

export const LayoutShell: React.FC<LayoutShellProps> = ({ children }) => {
  return (
    <div className="app-root">
      <TopNav />
      <main className="app-main">
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
};
