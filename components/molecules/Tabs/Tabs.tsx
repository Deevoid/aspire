import { TabsProps } from "@/components/molecules/Tabs/types";
import React from "react";

export const Tabs = (props: TabsProps) => {
  const { tabs, activeTab } = props;

  return (
    <div className="flex items-center gap-8">
      {tabs.map((tab) => (
        <>
          <button
            key={tab.id}
            className={`relative text-sm font-light text-textBaseColor ${
              tab.id === activeTab ? "font-semibold" : "opacity-30"
            }`}
          >
            {tab.label}
            {tab.id === activeTab && (
              <div className="absolute -bottom-[4.5px] left-0 h-[2px] w-full mt-1 bg-tabBorder" />
            )}
          </button>
        </>
      ))}
    </div>
  );
};
