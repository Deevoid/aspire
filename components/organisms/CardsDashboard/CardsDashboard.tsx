import { Spacer } from "@/components/atoms/Spacer";
import { CardActionGroup } from "@/components/molecules/CardActionGroup";
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
      <Spacer size={20} />
      <div className="box-shadow rounded-lg p-10 border border-[#FCFCFC] pt-[60px] pb-10 px-10">
        Hello
        <CardActionGroup />
      </div>
    </main>
  );
};
