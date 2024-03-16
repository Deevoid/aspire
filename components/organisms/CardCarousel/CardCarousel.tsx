"use client";

import { Spacer } from "@/components/atoms/Spacer";
import { Card } from "@/components/organisms/Card";
import { CardCarouselProps } from "@/components/organisms/CardCarousel/types";
import React from "react";

export const CardCarousel = (props: CardCarouselProps) => {
  const { cards, activeIndex = 0, onChange } = props;

  const [visibleIndex, setVisibleIndex] = React.useState(activeIndex);
  const currentCardData = cards?.[visibleIndex];

  if (!currentCardData) {
    return null;
  }

  return (
    <div>
      <Card key={currentCardData?.id} {...currentCardData} />
      <Spacer size={16} />
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: cards.length }).map((_, index) => {
          return (
            <button
              key={index}
              className={`bg-accent rounded-lg  h-2 w-2 ${
                index === visibleIndex ? "w-4" : "opacity-20"
              }`}
              onClick={() => {
                setVisibleIndex(index);
                onChange?.(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
