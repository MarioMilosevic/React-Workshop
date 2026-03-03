import React, { useState, useEffect } from "react";
import cn from "classnames";

let globalModalZIndex = 2000;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  steps?: number;
  currentStep?: number;
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
  confirmButtonText?: string;
  footerPosition?: "center" | "right";
  customFooter?: React.ReactNode;
  hideConfirmation?: boolean;
  width?: string | number;
  height?: string | number;
  title?: string;
  hideFooter?: boolean;
  hideHeader?: boolean;
  hideCloseButton?: boolean;
  isLoading?: boolean;
  overlayClickable?: boolean;
  testId?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  steps = 0,
  currentStep = 0,
  onNext,
  onBack,
  onSubmit,
  confirmButtonText,
  footerPosition = "center",
  customFooter,
  hideConfirmation = false,
  width,
  height,
  title,
  hideFooter = false,
  hideHeader = false,
  hideCloseButton = false,
  isLoading,
  overlayClickable = true,
  testId,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [showConfirm, setShowConfirm] = useState(false);
  const [zIndexBase, setZIndexBase] = useState(2000);
  const animationDuration = 200;

  useEffect(() => {
    if (isOpen) {
      globalModalZIndex += 10;
      setZIndexBase(globalModalZIndex);
      setShouldRender(true);
      setShowConfirm(false);
    } else {
      if (zIndexBase === globalModalZIndex) {
        globalModalZIndex = Math.max(2000, globalModalZIndex - 10);
      }
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  const isLastStep = steps > 0 && currentStep === steps - 1;

  const customStyle: React.CSSProperties = {};
  if (width !== undefined) customStyle.width = width;
  if (height !== undefined) customStyle.height = height;

  const handleOnClose = () => {
    if (!hideConfirmation) {
      setShowConfirm(true);
    } else {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 transition-opacity duration-200"
        style={{ zIndex: zIndexBase }}
        onClick={overlayClickable ? handleOnClose : undefined}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed bottom-0 left-0 flex h-full w-full flex-col bg-white rounded-t-2xl sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[90vh] sm:w-[420px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl shadow-xl transition-all duration-200",
          {
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 translate-y-4": !isOpen,
          },
        )}
        style={{ ...customStyle, zIndex: zIndexBase + 1 }}
        data-testid={testId}
      >
        {showConfirm && (
          <div className="px-6 py-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Are you sure you want to exit?
            </h2>
            <p className="my-4 text-sm text-gray-600">
              You'll lose your progress so far.
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full rounded-lg border border-gray-300 py-2"
              >
                Go back to the form
              </button>
              <button
                onClick={onClose}
                className="w-full rounded-lg bg-black text-white py-2"
              >
                Exit
              </button>
            </div>
          </div>
        )}

        {!hideHeader && !showConfirm && (
          <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <div className="flex items-center gap-3">
              {steps > 0 && currentStep > 0 && (
                <button
                  onClick={onBack}
                  disabled={!onBack}
                  className="text-gray-600"
                >
                  ←
                </button>
              )}
              {title && (
                <p className="text-lg font-semibold text-gray-900">{title}</p>
              )}
            </div>

            {steps > 1 && (
              <div className="flex gap-2">
                {Array.from({ length: steps }).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2 rounded-full bg-gray-400 transition-all",
                      i === currentStep ? "w-12 bg-gray-900" : "w-4 opacity-40",
                    )}
                  />
                ))}
              </div>
            )}

            {!hideCloseButton && (
              <button
                onClick={handleOnClose}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            )}
          </header>
        )}

        {isLoading && (
          <div className="flex justify-center py-6">
            <div className="animate-spin h-6 w-6 border-2 border-gray-400 border-t-transparent rounded-full" />
          </div>
        )}

        <div
          className={cn(
            "flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5",
            showConfirm && "hidden",
          )}
        >
          {children}
        </div>

        {!hideFooter &&
          !showConfirm &&
          (customFooter ? (
            <div
              className={cn(
                "flex border-t border-gray-200 px-6 py-4",
                footerPosition === "right" ? "justify-end" : "justify-center",
              )}
            >
              {customFooter}
            </div>
          ) : (
            <div
              className={cn(
                "flex border-t border-gray-200 px-6 py-4",
                footerPosition === "right" ? "justify-end" : "justify-center",
              )}
            >
              <button
                onClick={
                  isLastStep ? (onSubmit ?? (() => {})) : (onNext ?? (() => {}))
                }
                className="rounded-lg bg-black text-white px-6 py-2"
              >
                {confirmButtonText ?? (isLastStep ? "Confirm" : "Next")}
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Modal;
