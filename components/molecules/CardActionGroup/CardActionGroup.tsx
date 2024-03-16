import { cardActions } from "@/constants/cardActions";
import { useCardContext } from "@/context/cardContext";
import { updateSingleCard } from "@/hooks/useCardsData";
import Image from "next/image";
import React from "react";

export const CardActionGroup = () => {
  const { currentCard } = useCardContext();

  const actionHandler = (action: string) => {
    if (!action) return;

    switch (action) {
      case "freeze": {
        updateSingleCard(currentCard!.id, {
          cardState: currentCard?.cardState === "frozen" ? "active" : "frozen",
        });
        break;
      }
      default:
        break;
    }
  };

  const getActionLabel = (action: (typeof cardActions)[number]) => {
    if (action.id === "freeze") {
      return currentCard?.cardState === "frozen"
        ? "Unfreeze card"
        : "Freeze card";
    }

    return action.label;
  };

  return (
    <div className="rounded-2xl p-5 bg-background flex flex-wrap items-center gap-y-8 justify-between">
      {cardActions.map((action) => {
        return (
          <button
            key={action.id}
            className="flex flex-shrink-0 items-center flex-col gap-[7px]"
            onClick={() => actionHandler(action.id)}
          >
            <Image
              src={action.icon}
              alt={action.label}
              height={32}
              width={32}
            />
            <span className="max-w-16 text-[13px]  text-primary font-light">
              {getActionLabel(action)}
            </span>
          </button>
        );
      })}
    </div>
  );
};
