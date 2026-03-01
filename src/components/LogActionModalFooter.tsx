import { ClassValue } from "clsx";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  backButtonText: string;
  forwardButtonText: string;
  handleGoForward: () => void;
  handleGoBack: () => void;
  isForwardDisabled: boolean;
}

export default function LogActionModalFooter({
  backButtonText,
  forwardButtonText,
  handleGoBack,
  handleGoForward,
  isForwardDisabled,
}: Props) {
  return (
    <div className="relative flex justify-end pt-12 pb-12">
      <div className="border-opacity-50 absolute inset-x-0 top-0 -mx-400 sm:-mx-600"></div>
      <div className="flex gap-12">
        <Button
          text={backButtonText}
          type="button"
          variant="bordered"
          rounded
          onClick={handleGoBack}
        />
        <Button
          text={forwardButtonText}
          variant={isForwardDisabled ? "bordered" : "primary"}
          rounded
          disabled={isForwardDisabled}
          onClick={handleGoForward}
        />
      </div>
    </div>
  );
}
