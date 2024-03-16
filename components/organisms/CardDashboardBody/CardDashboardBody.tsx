"use client";

import { Spacer } from "@/components/atoms/Spacer";
import { Accordion } from "@/components/molecules/Accordion";
import { CardActionGroup } from "@/components/molecules/CardActionGroup";
import { CardAccordions } from "@/components/organisms/CardAccordions";
import { CardCarousel } from "@/components/organisms/CardCarousel";
import { CardProvider } from "@/context/cardContext";
import { useCardsData } from "@/hooks/useCardsData";
import React from "react";

export const CardDashboardBody = () => {
  const { cards } = useCardsData();

  const [activeCardIndex, setActiveCardIndex] = React.useState(0);

  const activeCard = cards!?.[activeCardIndex];

  return (
    <CardProvider
      value={{
        currentCard: activeCard,
      }}
    >
      <div className="box-shadow flex flex-col lg:flex-row flex-wrap gap-x-[46px] gap-y-[46px] rounded-lg p-10 border border-[#FCFCFC] pt-[60px] pb-10 px-10">
        <div className="flex-1">
          <CardCarousel
            activeIndex={activeCardIndex}
            cards={cards || []}
            onChange={(index) => setActiveCardIndex(index)}
          />
          <Spacer size={20} />
          <CardActionGroup />
        </div>
        <CardAccordions />
      </div>
    </CardProvider>
  );
};
