import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "outline" | "solid";

interface AWSchoolButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm md:text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-paper",
  solid:
    "border border-brand-accent bg-brand-accent text-paper hover:bg-ink hover:border-ink",
};

const AWSchoolButton: React.FC<AWSchoolButtonProps> = ({
  href,
  onClick,
  children,
  size = "md",
  variant = "outline",
  className,
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

  const mergedClasses = twMerge(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={mergedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={mergedClasses}>
      {children}
    </button>
  );
};

export default AWSchoolButton;
