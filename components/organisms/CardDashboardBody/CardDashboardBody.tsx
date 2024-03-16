"use client";

import { Spacer } from "@/components/atoms/Spacer";
import { CardActionGroup } from "@/components/molecules/CardActionGroup";
import { CardAccordions } from "@/components/organisms/CardAccordions";
import { CardCarousel } from "@/components/organisms/CardCarousel";
import { CardProvider } from "@/context/cardContext";
import { useCardsData } from "@/hooks/useCardsData";
import React, { useEffect } from "react";

export const CardDashboardBody = () => {
  const { cards } = useCardsData();

  const [activeCardIndex, setActiveCardIndex] = React.useState(0);

  const activeCard = cards!?.[activeCardIndex];

  useEffect(() => {
    // reset active card index when new card is added
    setActiveCardIndex(0);
  }, [cards?.length]);

  return (
    <CardProvider
      value={{
        currentCard: activeCard,
      }}
    >
      <div className="box-shadow flex flex-col items-center lg:items-start lg:flex-row gap-x-[46px] gap-y-[46px] rounded-lg  border border-[#FCFCFC] p-2 pt-10 md:pt-[60px] md:pb-10 md:px-10">
        <div className="flex-1">
          <CardCarousel
            activeIndex={activeCardIndex}
            setActiveIndex={setActiveCardIndex}
            cards={cards || []}
          />
          <Spacer size={20} />
          <CardActionGroup />
        </div>
        <CardAccordions />
      </div>
    </CardProvider>
  );
};
