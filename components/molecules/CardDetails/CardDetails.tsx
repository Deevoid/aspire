import { CardDetailsProps } from "@/components/molecules/CardDetails/types";
import React from "react";

export const CardDetails = (props: CardDetailsProps) => {
  const { expiryDate, cvv = "" } = props;

  return (
    <div className="flex items-center gap-9 text-white font-semibold">
      {expiryDate && (
        <p className="text-[13px]">
          <span>Thru: </span>
          <span className="tracking-widest">{expiryDate}</span>
        </p>
      )}
      {cvv && (
        <p className="flex relative gap-1 items-center">
          <span className="text-[13px]">CVV:</span>
          <span className="absolute -right-[54px] pt-[6px]">
            {cvv.split("").map((_, index) => (
              <span key={index} className="text-2xl tracking-widest">
                &#42;
              </span>
            ))}
          </span>
        </p>
      )}
    </div>
  );
};
