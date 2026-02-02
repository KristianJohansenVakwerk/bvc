import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Section = (props: Props) => {
  const { children, className, style } = props;

  return (
    <section className={clsx(className)} style={style}>
      {children}
    </section>
  );
};

export default Section;
