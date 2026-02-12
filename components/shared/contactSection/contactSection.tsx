"use client";
import { Box, Link, Section, Text } from "@/components";
import type { ContactItem, ContactSectionData } from "@/types/data";
import clsx from "clsx";


type Props = {
  data: ContactSectionData;
};

const renderItem = (item: ContactItem) => {
  const hasLink = !!item.url;

  const classes = clsx("flex items-center p-1 tracking-2");

  if (!hasLink)
    return (
      <Text text={item.title} typeface="mono" className={classes} size="sm" />
    );

  return (
       <Link href={item.url as string} target="_blank" className={clsx(classes, "block w-full h-full")}>
      <Text
        text={item.title}
        typeface="mono"
        size="sm"
        className="tracking-2"
      />
    </Link>
  );
};

const ContactSection = (props: Props) => {
  const { data } = props;
  const [groupA = [], groupB = []] = data;

  return (
    <Section className="w-full px-2 md:px-0">
      <Box className="w-full border-l-[0.5px] border-r-[0.5px] border-t-[0.5px] border-black flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-0">
        <Box className="md:border-b-[0.5px] md:border-black flex-1 md:flex-auto w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-0">
          {groupA.map((item, index) => (
            <Box
              key={index}
              className=" flex border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-black w-full md:w-auto flex-auto"
            >
              {renderItem(item)}
            </Box>
          ))}
        </Box>
        <Box className="border-b-[0.5px] border-black flex-1 md:flex-auto w-full md:w-auto flex flex-col md:flex-row justify-start items-center gap-0">
          {groupB.map((item, index) => (
            <Box
              key={index}
              className="flex border-b-[0.5px] last:border-b-0 md:border-b-0 md:border-r-[0.5px] last:md:border-r-0 border-black w-full md:w-auto flex-auto"
              
            >
              {renderItem(item)}
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default ContactSection;
