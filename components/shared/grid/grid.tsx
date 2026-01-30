import clsx from "clsx";
import {
  COLS_CLASSNAME,
  GAP_CLASSNAME,
  RESPONSIVE_COLS_CLASSNAME,
  RESPONSIVE_GAP_CLASSNAME,
} from "@/types/grid";

type Props = {
  cols: keyof typeof COLS_CLASSNAME;
  gap: keyof typeof GAP_CLASSNAME;
  colsTablet?: keyof typeof COLS_CLASSNAME;
  colsDesktop?: keyof typeof COLS_CLASSNAME;
  gapTablet?: keyof typeof GAP_CLASSNAME;
  gapDesktop?: keyof typeof GAP_CLASSNAME;
  children: React.ReactNode;
  className?: string;
};

const Grid = (props: Props) => {
  const {
    cols,
    gap,
    colsTablet,
    colsDesktop,
    gapTablet,
    gapDesktop,
    children,
    className,
  } = props;

  const colsClassName = COLS_CLASSNAME[cols];
  const gapClassName = GAP_CLASSNAME[gap];

  const tabletCols = colsTablet
    ? RESPONSIVE_COLS_CLASSNAME[colsTablet].tablet
    : undefined;
  const desktopCols = colsDesktop
    ? RESPONSIVE_COLS_CLASSNAME[colsDesktop].desktop
    : undefined;

  const tabletGap = gapTablet
    ? RESPONSIVE_GAP_CLASSNAME[gapTablet].tablet
    : undefined;
  const desktopGap = gapDesktop
    ? RESPONSIVE_GAP_CLASSNAME[gapDesktop].desktop
    : undefined;

  return (
    <div
      className={clsx(
        "grid w-full",
        colsClassName,
        tabletCols,
        desktopCols,
        gapClassName,
        tabletGap,
        desktopGap,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
