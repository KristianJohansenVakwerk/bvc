import { Box, Grid, GridItem, Section } from "@/components";
import { SmallText } from "@/components/UI/text/text";
import type { RetailerLocation } from "@/types/data";
import clsx from "clsx";

type Props = {
  data: RetailerLocation[];
};

const RetailersSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="w-full flex flex-col gap-2.5">
      <SmallText text="FORHANDLERE" typeface="mono" />
      <Grid
        cols={8}
        colsTablet={8}
        colsDesktop={8}
        gap={0}
        className={clsx("")}
      >
        {data.map((locationBlock, index) => (
          <GridItem
            key={index}
            colspan={2}
            colspanTablet={2}
            colspanDesktop={2}
          >
            <Box className="p-1 flex flex-col gap-2">
              <SmallText text={locationBlock.location} typeface="mono" />
              <Box className="flex flex-col gap-[10px]">
                {locationBlock.stores.map((store, storeIndex) => (
                  <SmallText
                    key={storeIndex}
                    text={store}
                    typeface="mono"
                    as="div"
                  />
                ))}
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default RetailersSection;
