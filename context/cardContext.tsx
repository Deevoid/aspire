import { SingleCardType } from "@/constants/cards";
import { createContext, useContext } from "react";

export type CardContextType = {
  currentCard: SingleCardType | null;
};

export const cardContext = createContext<CardContextType>({
  currentCard: null,
});

export const CardProvider = cardContext.Provider;

export const useCardContext = () => {
  if (!cardContext)
    throw new Error("useCardContext must be used within a CardProvider");

  return useContext(cardContext);
};
