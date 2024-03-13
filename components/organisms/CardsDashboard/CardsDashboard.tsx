import { Spacer } from "@/components/atoms/Spacer";
import { CardsDashboardHeader } from "@/components/molecules/CardsDashboardHeader";
import { Tabs } from "@/components/molecules/Tabs";
import { CardDashboardTabs } from "@/constants/tabs";
import React from "react";

export const CardsDashboard = () => {
  return (
    <main className="w-full max-w-[1026px] p-[60px] mx-auto flex-1">
      <CardsDashboardHeader />
      <Spacer size={36} />
      <Tabs tabs={CardDashboardTabs} activeTab="my-cards" />
    </main>
  );
};
