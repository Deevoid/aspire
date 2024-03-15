"use client";

import { AccordionProps } from "@/components/molecules/Accordion/types";
import Image from "next/image";
import React from "react";

export const Accordion = (props: AccordionProps) => {
  const { children, header, footer, isInitiallyOpen = false } = props;

  const [isOpen, setIsOpen] = React.useState(isInitiallyOpen);

  return (
    <div className="relative isolate">
      <div
        className="relative flex items-center justify-between p-6 z-30 rounded-lg border border-[#f5f5f5] bg-[#f5f9ff] box-shadow-0"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {header}
        <Image
          src="/images/down-arrow.svg"
          alt="chevron-down"
          width={24}
          height={24}
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <>
          <div className="relative -mt-4 pt-10 px-6 pb-6 z-20 border rounded-lg border-[#F0F0F0] bg-white">
            {children}
          </div>
          {footer && (
            <div className="relative -mt-4 pt-8 pb-4 px-4 z-10 rounded-lg bg-accentLight border border-accentBorder">
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
};
