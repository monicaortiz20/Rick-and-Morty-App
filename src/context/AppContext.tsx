"use client";

import App from "next/app";
import { createContext, useContext, useState, ReactNode } from "react";

type TabType = "episodes" | "locations";

type AppContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("episodes");
  const [currPage, setCurrPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        activeTab,
        setActiveTab,
        currPage,
        setCurrPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider.");

  return context;
}
