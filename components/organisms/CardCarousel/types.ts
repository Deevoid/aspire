import { SingleCardType } from "@/constants/cards";

export type CardCarouselProps = {
  cards: Array<SingleCardType>;
  activeIndex?: number;
  onChange?: (index: number) => void;
};
