import { Box, Grid, GridItem, Section } from "@/components";
import { SmallText } from "@/components/UI/text/text";
import type { ProductInformation } from "@/types/data";
import clsx from "clsx";

type Props = {
  data: ProductInformation[];
};

const ProductInformationSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="px-2 md:px-0">
      <Grid
        cols={1}
        colsTablet={4}
        colsDesktop={4}
        gap={0}
        className="border-l-[0.5px] border-b-[0.5px] border-black"
      >
        {data.map((info, index) => (
          <GridItem
            key={index}
            colspan={1}
            className="border-t-[0.5px] border-r-[0.5px] border-black  min-h-[260px]"
          >
            <Box
              className={clsx("p-1", {
                "border-b-[0.5px] border-black": index !== 0,
              })}
            >
              <SmallText text={info.title} typeface="mono" />
            </Box>
            <Box className="p-1">
              <SmallText text={info.text} typeface="mono" />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductInformationSection;
