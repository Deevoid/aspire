import { Spacer } from "@/components/atoms/Spacer";
import { Accordion } from "@/components/molecules/Accordion";
import { CardActionGroup } from "@/components/molecules/CardActionGroup";
import { CardsDashboardHeader } from "@/components/molecules/CardsDashboardHeader";
import { Tabs } from "@/components/molecules/Tabs";
import { Card } from "@/components/organisms/Card";
import { CardDashboardTabs } from "@/constants/tabs";
import React from "react";

export const CardsDashboard = () => {
  return (
    <main className="w-full max-w-[1026px] p-[60px] mx-auto flex-1">
      <CardsDashboardHeader />
      <Spacer size={36} />
      <Tabs tabs={CardDashboardTabs} activeTab="my-cards" />
      <Spacer size={20} />
      <div className="box-shadow flex flex-col lg:flex-row flex-wrap gap-x-[46px] gap-y-[46px] rounded-lg p-10 border border-[#FCFCFC] pt-[60px] pb-10 px-10">
        <div className="flex-1">
          <div>
            <Card />
          </div>
          <Spacer size={20} />
          <CardActionGroup />
        </div>
        <div className="flex flex-1 flex-col lg:max-w-[364px] items-stretch gap-6">
          <Accordion
            header={
              <div>
                <h1>Header</h1>
              </div>
            }
            footer={
              <div>
                <h1>Footer</h1>
              </div>
            }
          >
            Content
          </Accordion>
          <Accordion
            header={
              <div>
                <h1>Header</h1>
              </div>
            }
            footer={
              <div>
                <h1>Footer</h1>
              </div>
            }
            isInitiallyOpen={true}
          >
            Content
          </Accordion>
        </div>
      </div>
    </main>
  );
};
