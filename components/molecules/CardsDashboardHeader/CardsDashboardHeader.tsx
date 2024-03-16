"use client";

import { Button } from "@/components/atoms/Button";
import { AddNewCard } from "@/components/organisms/Modal/modals/AddNewCard";
import Image from "next/image";
import React from "react";

export const CardsDashboardHeader = () => {
  // ideally this would be coming from an API and consumed from a hook/state
  const totalBalance = 3000;

  const parsedBalance = new Intl.NumberFormat().format(totalBalance);

  const [openCardModal, setOpenCardModal] = React.useState(false);

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-light mb-[9px] text-textBaseColor">
          Available balance
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[24px] w-[40px] flex items-center justify-center text-[13px] font-semibold bg-accent rounded text-white">
            S$
          </div>
          <p className="font-semibold text-[26px] text-textBaseColor leading-[36px]">
            {parsedBalance}
          </p>
        </div>
      </div>
      <div className="mt-[29px]">
        <Button
          onClick={() => {
            setOpenCardModal(true);
          }}
          className="py-[10px] gap-2 px-[12px] bg-secondary text-white text-[13px] font-semibold"
        >
          <Image
            src="/images/box.svg"
            height={16}
            width={16}
            alt="new-card-icon"
          />
          <span className="leading-[18px]">New card</span>
        </Button>
      </div>
      <AddNewCard isOpen={openCardModal} setIsOpen={setOpenCardModal} />
    </div>
  );
};
