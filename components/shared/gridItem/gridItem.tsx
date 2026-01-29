import clsx from "clsx";
import { COLSPAN_CLASSNAME, RESPONSIVE_COLSPAN_CLASSNAME } from "@/types/grid";

type Props = {
  colspan: keyof typeof COLSPAN_CLASSNAME;
  colspanTablet?: keyof typeof COLSPAN_CLASSNAME;
  colspanDesktop?: keyof typeof COLSPAN_CLASSNAME;
  className?: string;
  children: React.ReactNode;
};

const GridItem = (props: Props) => {
  const { colspan, colspanTablet, colspanDesktop, className, children } = props;

  const colspanClassName = COLSPAN_CLASSNAME[colspan];

  const tabletColspan = colspanTablet
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspanTablet].tablet
    : undefined;
  const desktopColspan = colspanDesktop
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspanDesktop].desktop
    : undefined;

  const classes = clsx(
    colspanClassName,
    tabletColspan,
    desktopColspan,
    className
  );

  return <div className={classes}>{children}</div>;
};

export default GridItem;
