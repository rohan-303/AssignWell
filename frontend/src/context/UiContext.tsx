import React, { createContext, useContext, useState } from "react";

interface UiContextState {
  aiChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
}

const UiContext = createContext<UiContextState | undefined>(undefined);

export const UiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [aiChatOpen, setAiChatOpen] = useState(false);

  return (
    <UiContext.Provider value={{ aiChatOpen, setAiChatOpen }}>
      {children}
    </UiContext.Provider>
  );
};

export const useUi = (): UiContextState => {
  const ctx = useContext(UiContext);
  if (!ctx) {
    throw new Error("useUi must be used within UiProvider");
  }
  return ctx;
};
