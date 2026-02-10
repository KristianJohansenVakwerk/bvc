import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<typeof Link>;

const UILink = (props: Props) => {
  const { children, className, ...rest } = props;

  const classes = clsx("hover:underline", className);

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  );
};

export default UILink;
