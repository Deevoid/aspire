import { SingleCardType } from "@/constants/cards";

export type CardCarouselProps = {
  cards: Array<SingleCardType>;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
};
