import { cardActions } from "@/constants/cardActions";
import Image from "next/image";
import React from "react";

export const CardActionGroup = () => {
  return (
    <div className="rounded-2xl p-5 bg-background flex items-center justify-between">
      {cardActions.map((action) => {
        return (
          <button
            key={action.id}
            className="flex items-center flex-col gap-[7px]"
          >
            <Image
              src={action.icon}
              alt={action.label}
              height={32}
              width={32}
            />
            <span className="max-w-16 text-[13px]  text-primary font-light">
              {action.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
