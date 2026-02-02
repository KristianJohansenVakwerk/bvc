import clsx from "clsx";
import { COLSPAN_CLASSNAME, RESPONSIVE_COLSPAN_CLASSNAME } from "@/types/grid";

type Props = {
  colspan: keyof typeof COLSPAN_CLASSNAME;
  colspanTablet?: keyof typeof COLSPAN_CLASSNAME;
  colspanDesktop?: keyof typeof COLSPAN_CLASSNAME;
  colspanXl?: keyof typeof COLSPAN_CLASSNAME;
  colspan2xl?: keyof typeof COLSPAN_CLASSNAME;
  colspan3xl?: keyof typeof COLSPAN_CLASSNAME;
  colspan4xl?: keyof typeof COLSPAN_CLASSNAME;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
};

const GridItem = (props: Props) => {
  const {
    colspan,
    colspanTablet,
    colspanDesktop,
    colspanXl,
    colspan2xl,
    colspan3xl,
    colspan4xl,
    className,
    style,
    children,
    ref = null,
  } = props;

  const colspanClassName = COLSPAN_CLASSNAME[colspan];

  const tabletColspan = colspanTablet
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspanTablet].tablet
    : undefined;
  const desktopColspan = colspanDesktop
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspanDesktop].desktop
    : undefined;
  const xlColspan = colspanXl
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspanXl].xl
    : undefined;
  const twoXlColspan = colspan2xl
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspan2xl]["2xl"]
    : undefined;
  const threeXlColspan = colspan3xl
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspan3xl]["3xl"]
    : undefined;
  const fourXlColspan = colspan4xl
    ? RESPONSIVE_COLSPAN_CLASSNAME[colspan4xl]["4xl"]
    : undefined;

  const classes = clsx(
    colspanClassName,
    tabletColspan,
    desktopColspan,
    xlColspan,
    twoXlColspan,
    threeXlColspan,
    fourXlColspan,
    className
  );

  return (
    <div className={classes} style={style} ref={ref ?? undefined}>
      {children}
    </div>
  );
};

export default GridItem;
