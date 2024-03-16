import { SingleCardType, debitCards } from "@/constants/cards";
import React from "react";
import { produce } from "immer";
import { create } from "zustand";

const cardsStore = create<{
  state: {
    cards: Array<SingleCardType> | null;
  };
}>(() => {
  return {
    state: {
      cards: debitCards,
    },
  };
});

export const addNewCard = (cardData: SingleCardType) => {
  cardsStore.setState((prev) => {
    const newCards = prev.state.cards
      ? [cardData, ...prev.state.cards]
      : [cardData];
    return {
      state: {
        cards: newCards,
      },
    };
  });
};

export const updateSingleCard = (
  id: string,
  cardData: Partial<SingleCardType>
) => {
  cardsStore.setState((prev) =>
    produce(prev, (draft) => {
      if (draft.state.cards) {
        const index = draft.state.cards.findIndex((card) => card.id === id);
        draft.state.cards[index] = {
          ...draft.state.cards[index],
          ...cardData,
        };
      }
    })
  );
};

export const useCardsData = () => {
  const cards = cardsStore((get) => get.state.cards);

  return {
    cards,
  };
};
