import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<typeof Link>;

const UILink = (props: Props) => {
  const { children, className, ...rest } = props;

  const classes = clsx(
    "hover:text-gray-500 transition-colors duration-300",
    className
  );

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  );
};

export default UILink;
