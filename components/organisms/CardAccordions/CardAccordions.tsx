import { Accordion } from "@/components/molecules/Accordion";
import { CardDetails } from "@/components/molecules/CardDetails";
import {
  transactionCategoryColorMap,
  transactionCategoryIconMap,
  transactionCategoryIconSizeMap,
} from "@/constants/cards";
import { useCardContext } from "@/context/cardContext";
import Image from "next/image";
import React from "react";

export const CardAccordions = () => {
  const { currentCard } = useCardContext();
  return (
    <div className="flex flex-1 flex-col lg:max-w-[364px] items-stretch gap-6">
      <Accordion
        header={
          <div className="flex items-center gap-3">
            <Image
              src="/images/Group 11889.svg"
              height={24}
              width={24}
              alt="card-details-icon"
            />
            <span className="text-sm text-primary">Card details</span>
          </div>
        }
      >
        <CardDetails
          className="text-slate-800"
          cvv={currentCard!?.cvv}
          expiryDate={currentCard!?.expiryDate}
        />
      </Accordion>
      <Accordion
        header={
          <div className="flex items-center gap-3">
            <Image
              src="/images/Group 11889-1.svg"
              height={24}
              width={24}
              alt="card-details-icon"
            />
            <span className="text-sm text-primary">Recent transactions</span>
          </div>
        }
        footer={
          <button className="text-center w-full font-semibold  text-[13px] text-accent">
            View all transaction
          </button>
        }
        isInitiallyOpen={true}
      >
        <div className=" flex flex-col">
          {currentCard?.transactions?.map((transaction) => (
            <div
              key={transaction.id}
              className="flex gap-3 first:pt-0 pt-4 last:pb-0 pb-4 last:border-none border-b border-[#fafafa]"
            >
              <div
                className="w-12 h-12 rounded-full grid place-items-center"
                style={{
                  background: transactionCategoryColorMap[transaction.category],
                }}
              >
                <Image
                  src={transactionCategoryIconMap[transaction.category]}
                  height={
                    transactionCategoryIconSizeMap[transaction.category].height
                  }
                  width={
                    transactionCategoryIconSizeMap[transaction.category].width
                  }
                  alt="transaction-icon"
                />
              </div>
              <div>
                <p className="text-sm text-textBaseColor font-medium mb-1">
                  {transaction.merchantName}
                </p>
                <p className="text-[13px] text-[#AAAAAA] mb-3">
                  {transaction.date}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="h-5 w-6 bg-secondary flex items-center justify-center rounded-full">
                    <Image
                      src="/images/business-and-finance.svg"
                      height={7.8}
                      width={10}
                      alt="transaction-icon"
                    />
                  </div>
                  <p className="text-xs text-secondary font-medium">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <div className="ml-auto flex self-start items-center gap-[10.5px]">
                <p
                  className={`text-base font-semibold ${
                    transaction.type === "credit"
                      ? "text-accent"
                      : "text-textBaseColor"
                  }`}
                >
                  {
                    {
                      credit: "+ ",
                      debit: "- ",
                    }[transaction.type]
                  }
                  S$ {transaction.amount}
                </p>
                <Image
                  src="/images/next.svg"
                  height={12}
                  width={6.5}
                  alt="transaction-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};
