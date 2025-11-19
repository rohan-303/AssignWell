import React from "react";
import { AppRouter } from "./router";
import { LayoutShell } from "./layout/LayoutShell";
import { UiProvider } from "./context/UiContext";

const App: React.FC = () => {
  return (
    <UiProvider>
      <LayoutShell>
        <AppRouter />
      </LayoutShell>
    </UiProvider>
  );
};

export default App;
