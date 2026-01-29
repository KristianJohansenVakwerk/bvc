import clsx from "clsx";
import Box from "../box/box";
import { TEXT_SIZE_CLASSNAME, TYPEFACE_CLASSNAME } from "@/types/text";

type Props = {
  text: string | React.ReactNode;
  typeface?: keyof typeof TYPEFACE_CLASSNAME;
  size?: keyof typeof TEXT_SIZE_CLASSNAME;
  as?: string;
  className?: string;
};

const Text = (props: Props) => {
  const { text, typeface = "sans", size = "base", as = "p", className } = props;

  const typefaceClassName = TYPEFACE_CLASSNAME[typeface];
  const textSizeClassName = TEXT_SIZE_CLASSNAME[size];
  const classes = clsx(
    "text-trim",
    className,
    typefaceClassName,
    textSizeClassName,
    "[&_p]:not-last:mb-1.5"
  );

  if (!text || typeof text !== "string") return null;

  const containsHtml = /<[^>]+>/.test(text);

  if (containsHtml) {
    return (
      <Box
        as="div"
        className={classes}
        dangerouslySetInnerHTML={{ __html: text }}
      >
        {null}
      </Box>
    );
  }

  return (
    <Box as={as} className={classes}>
      {text}
    </Box>
  );
};

export default Text;

export const SmallText = (props: Omit<Props, "size">) => {
  const { text, typeface = "sans", as = "p" } = props;

  return (
    <Text
      text={text}
      typeface={typeface}
      size="sm"
      as={as}
      className={"leading-[133%] tracking-2"}
    />
  );
};
