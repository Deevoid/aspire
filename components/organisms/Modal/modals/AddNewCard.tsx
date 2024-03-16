"use client";

import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/organisms/Card";
import { Modal } from "@/components/organisms/Modal";
import { AddNewCardProps } from "@/components/organisms/Modal/modals/types";
import { SingleCardType, defaultTransactions } from "@/constants/cards";
import { addNewCard } from "@/hooks/useCardsData";
import {
  generateRandomCardNumber,
  generateRandomExpiryDate,
  sleep,
} from "@/utils";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

export const AddNewCard = (props: AddNewCardProps) => {
  const { isOpen, setIsOpen } = props;

  const methods = useForm({
    defaultValues: {
      cardName: "",
      cardNumber: generateRandomCardNumber(),
      expiryDate: generateRandomExpiryDate(),
      // cvv: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = methods;

  const cardData: SingleCardType = {
    cardNumber: watch("cardNumber"),
    name: watch("cardName") || "Peter Parker",
    cvv: "000",
    expiryDate: watch("expiryDate"),
    id: "demo-card",
    cardState: "active",
    cardType: "visa",
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async () => {
    const payload: SingleCardType = {
      ...cardData,
      transactions: defaultTransactions,
    };

    setIsSubmitting(true);
    await sleep(2000);
    addNewCard(payload);
    setIsSubmitting(false);
    reset();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeHandler={() => setIsOpen(false)}
      title="Add new card"
    >
      <div className="flex mt-4 gap-8 flex-wrap items-center">
        <form
          className="flex-1 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* name */}
          <label className="relative w-full flex flex-col">
            <span className="font-medium mb-1 text-sm">Name on card</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border border-gray-200 placeholder-gray-300"
              type="text"
              inputMode="text"
              maxLength={20}
              placeholder="Peter Parker"
              {...register("cardName", {
                required: "Required",
              })}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className="absolute -bottom-4 text-xs text-red-600">
              {errors?.cardName?.message}
            </p>
          </label>

          {/* number */}
          {/* <label className="relative w-full flex flex-col">
            <span className="font-medium mb-1 text-sm">Card number</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border border-gray-200 placeholder-gray-300"
              type="text"
              maxLength={16}
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              {...register("cardNumber", {
                required: "Required",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Invalid card number",
                },
              })}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <p className="absolute -bottom-4 text-xs text-red-600">
              {errors?.cardNumber?.message}
            </p>
          </label> */}

          {/* date */}
          {/* <label className="relative w-full flex flex-col">
            <span className="font-medium mb-1 text-sm">Expiry Date</span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border border-gray-200 placeholder-gray-300"
              type="text"
              inputMode="numeric"
              maxLength={5}
              placeholder="MM/YY"
              {...register("expiryDate", {
                required: "Required",
                pattern: {
                  // should match pattern MM/YY
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Invalid expiry date. Use MM/YY format",
                },
              })}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="absolute -bottom-4 text-xs text-red-600">
              {errors?.expiryDate?.message}
            </p>
          </label> */}

          {/* cvv */}
          {/* <label className="relative w-full flex flex-col">
            <span className="font-medium mb-1 text-sm tracking-widest">
              CVV
            </span>
            <input
              className="rounded-md peer pl-12 pr-2 py-2 border border-gray-200 placeholder-gray-300"
              type="password"
              inputMode="numeric"
              maxLength={3}
              placeholder="***"
              {...register("cvv", {
                required: "Required",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "Invalid CVV",
                },
              })}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="absolute -bottom-4 text-xs text-red-600">
              {errors?.cvv?.message}
            </p>
          </label> */}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 py-[10px] gap-2 px-[12px] bg-secondary text-white text-[13px] font-semibold"
          >
            <Image
              src="/images/box.svg"
              height={16}
              width={16}
              alt="new-card-icon"
            />
            <span className="leading-[18px]">
              {isSubmitting ? "Adding card..." : "Add card"}
            </span>
          </Button>
        </form>
        <div className="flex-shrink-0 w-[414px] mx-auto max-w-full">
          <Card {...cardData} />
        </div>
      </div>
    </Modal>
  );
};
