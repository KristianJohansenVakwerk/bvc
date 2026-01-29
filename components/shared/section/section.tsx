import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = (props: Props) => {
  const { children, className } = props;

  return <section className={clsx(className)}>{children}</section>;
};

export default Section;
