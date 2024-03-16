import { CardNumberProps } from "@/components/molecules/CardNumber/types";
import { getChoppedNumbersArray } from "@/utils";
import React, { useMemo } from "react";

export const CardNumber = (props: CardNumberProps) => {
  const { cardNumber, className, visibility = "partial" } = props;

  const choppedCardNumbers = getChoppedNumbersArray(
    cardNumber?.replaceAll(" ", "").split("")
  );

  const { hiddenNumbersArray, visibleNumbersArray } = useMemo(() => {
    if (visibility === "visible") {
      return {
        hiddenNumbersArray: [],
        visibleNumbersArray: choppedCardNumbers,
      };
    }

    if (visibility === "hidden") {
      return {
        hiddenNumbersArray: choppedCardNumbers,
        visibleNumbersArray: [],
      };
    }

    return {
      hiddenNumbersArray: choppedCardNumbers.slice(
        0,
        choppedCardNumbers.length - 1
      ),
      visibleNumbersArray: choppedCardNumbers.slice(
        choppedCardNumbers.length - 1
      ),
    };
  }, [choppedCardNumbers, visibility]);

  // to ensure that there is no layout shift while rendering hidden/visible card numbers
  const renderer = (
    renderableArray: Array<Array<string>>,
    renderValues: boolean
  ) => {
    return (
      renderableArray?.length > 0 && (
        <span className="flex gap-[27px]  flex-shrink-0">
          {renderableArray.map((item, index) => {
            return (
              <span
                key={index.toString() + item + "card-outer"}
                className="flex w-[56px] gap-[6.7px]"
              >
                {item.map((cardItem, cardInnerIndex) => {
                  if (renderValues)
                    return (
                      <span
                        key={
                          cardInnerIndex.toString() +
                          cardItem +
                          "card-inner-visible"
                        }
                        className="text-white"
                      >
                        {cardItem}
                      </span>
                    );
                  return (
                    <span
                      key={
                        cardInnerIndex.toString() +
                        cardItem +
                        "card-inner-hidden"
                      }
                      className="text-white inline-block h-[9px] w-[9px] bg-white rounded-full"
                    />
                  );
                })}
              </span>
            );
          })}
        </span>
      )
    );
  };

  if (!cardNumber) {
    return null;
  }

  return (
    <p className={`flex items-center gap-[27px] ${className}`}>
      {renderer(hiddenNumbersArray, false)}
      {renderer(visibleNumbersArray, true)}
    </p>
  );
};
