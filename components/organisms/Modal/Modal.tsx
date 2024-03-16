import { Spacer } from "@/components/atoms/Spacer";
import { ModalProps } from "@/components/organisms/Modal/types";
import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = (props: ModalProps) => {
  const { isOpen, closeHandler, children, title } = props;
  const isSSR = typeof window === "undefined";

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      // add event listener when modal is open
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      // remove event listener when modal is closed
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape, isOpen]);

  if (isSSR || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 h-full w-full flex items-center justify-center"
      role="dialog"
      aria-modal
    >
      <div className="absolute overlay top-0 left-0 h-full w-full  filter backdrop-blur-xl bg-transparent"></div>
      <div className="relative bg-white p-10 rounded-lg shadow-xl max-w-full w-[800px] border border-slate-200">
        <div className="flex flex-col bg-white">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-primary">{title}</p>
            <button onClick={closeHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <Spacer size={20} />
          <div className="">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
    "modal-container-key"
  );
};
