import React from "react";
import type { IconName } from "@/types/icons";

export type ArrowRightIconProps = {
  className?: string;
  title?: string;
} & Omit<React.SVGProps<SVGSVGElement>, "children">;

export const ArrowRightIcon = (props: ArrowRightIconProps) => {
  const {
    className,
    title,
    width = 21,
    height = 12,
    viewBox = "0 0 21 12",
    ...restProps
  } = props;

  const ariaProps =
    title && title !== ""
      ? { role: "img" as const, "aria-label": title }
      : { "aria-hidden": true as const };

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...ariaProps}
      {...restProps}
    >
      <path
        d="M14.6963 0.21967C14.9892 -0.0732234 15.4649 -0.0732234 15.7578 0.21967L20.5303 4.99311C20.8232 5.286 20.8232 5.76076 20.5303 6.05365L15.7578 10.8271C15.4649 11.12 14.9892 11.12 14.6963 10.8271C14.4034 10.5342 14.4034 10.0585 14.6963 9.76557L18.1895 6.27338H0V4.77338H18.1895L14.6963 1.28119C14.4034 0.9883 14.4034 0.512563 14.6963 0.21967Z"
        fill="currentColor"
      />
    </svg>
  );
};

type Props = {
  name: IconName;
  className?: string;
  title?: string;
} & Omit<React.SVGProps<SVGSVGElement>, "children">;

const Icons = (props: Props) => {
  const { name, ...iconProps } = props;

  if (name === "arrowRight") return <ArrowRightIcon {...iconProps} />;

  return null;
};

export default Icons;
