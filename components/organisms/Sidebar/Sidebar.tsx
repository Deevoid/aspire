import React from "react";
import Image from "next/image";
import { navigation } from "@/constants/navigation";

export const Sidebar = () => {
  // this would come from the router or some other state manager in a real app
  const activeNavItem = "cards";
  return (
    <aside className="flex-grow-0 flex-shrink-0 w-[340px] bg-primary py-[48px] pl-[48px] pr-[55px] flex flex-col">
      <div className="mb-[81px]">
        <Image src="/images/logo.svg" alt="Aspire" width={125} height={35} />
        <p className="mt-[19px] text-white opacity-30 text-15 font-light">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <nav className="flex flex-col gap-[60px]">
        {navigation.map((navItem) => {
          return (
            <a
              key={navItem.id}
              href={navItem.href}
              className="flex items-center justify-start"
            >
              <Image
                src={navItem.icon}
                alt={navItem.label}
                width={24}
                height={24}
              />
              <p
                className={`ml-[16px] text-white text-base font-light ${
                  activeNavItem === navItem.id
                    ? "font-semibold text-accent"
                    : ""
                }`}
              >
                {navItem.label}
              </p>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
