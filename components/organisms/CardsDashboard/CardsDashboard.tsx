import { Spacer } from "@/components/atoms/Spacer";
import { CardsDashboardHeader } from "@/components/molecules/CardsDashboardHeader";
import { Tabs } from "@/components/molecules/Tabs";
import { CardDashboardBody } from "@/components/organisms/CardDashboardBody";
import { CardDashboardTabs } from "@/constants/tabs";
import React from "react";

export const CardsDashboard = () => {
  return (
    <main className="overflow-auto flex-1">
      <div className="w-full max-w-[1026px] p-4 md:p-[60px] mx-auto flex-1 ">
        <CardsDashboardHeader />
        <Spacer size={36} />
        <Tabs tabs={CardDashboardTabs} activeTab="my-cards" />
        <Spacer size={20} />
        <CardDashboardBody />
      </div>
    </main>
  );
};
