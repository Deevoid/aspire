"use client";

import { Spacer } from "@/components/atoms/Spacer";
import { CardDetails } from "@/components/molecules/CardDetails";
import { CardNumber } from "@/components/molecules/CardNumber";
import { SingleCardType } from "@/constants/cards";
import Image from "next/image";
import React from "react";

export const Card = (props: Omit<SingleCardType, "transactions">) => {
  const { id, name, cardNumber, expiryDate, cvv, cardType, cardState } = props;

  const [isCardNumberVisible, setIsCardNumberVisible] = React.useState(false);

  return (
    <div className="relative max-w-[414px]">
      <div
        className="absolute right-0 -top-7 cursor-pointer select-none flex gap-[6px]"
        onClick={() => {
          setIsCardNumberVisible((prev) => !prev);
        }}
      >
        <Image
          src="/images/remove_red_eye-24px.svg"
          height={16}
          width={16}
          alt="show-card-number"
        />
        <span className="text-xs text-accent font-semibold">
          {isCardNumberVisible ? "Hide" : "Show"} card number
        </span>
      </div>
      <div className="relative single-card p-[27px] rounded-lg bg-accent">
        <div className="flex justify-end">
          <Image
            src="/images/Aspire Logo-1.svg"
            alt="card-logo"
            width={83.5}
            height={23.7}
          />
        </div>
        <Spacer size={27} />
        <p className="text-white font-semibold text-2xl">Mark Henry</p>
        <Spacer size={27} />
        <CardNumber
          cardNumber="1234567812345678"
          visibility={isCardNumberVisible ? "visible" : "partial"}
        />
        <Spacer size={13.6} />
        <CardDetails expiryDate="12/20" cvv="123" />
        <Spacer size={4.6} />
        <div className="flex justify-end">
          <Image
            src="/images/Visa Logo.svg"
            alt="card-logo"
            width={66.5}
            height={22.5}
          />
        </div>
      </div>
    </div>
  );
};
