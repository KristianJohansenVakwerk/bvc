"use client";
import { Grid, GridItem, Image, Section, Text } from "@/components";

type Props = {
  data: string[];
};

const HeaderSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="w-full px-2 md:px-0">
      <Grid
        cols={4}
        colsTablet={4}
        colsDesktop={8}
        gap={2.5}
        className="items-start justify-start"
      >
        <GridItem
          colspan={4}
          colspanDesktop={4}
          colspanXl={3}
          colspan4xl={2}
          className="order-2 lg:order-1 "
        >
          <Text text={data[0]} typeface="sans" size="base" />
        </GridItem>

        <GridItem
          colspan={4}
          colspanDesktop={2}
          colspanXl={3}
          colspan4xl={4}
          className="hidden lg:flex items-center justify-center lg:order-2  "
        >
          {null}
        </GridItem>

        <GridItem
          colspan={4}
          colspanDesktop={2}
          className="order-1 lg:order-3 flex items-center justify-center  lg:aspect-[390/400]"
        >
          <Image
            src="/media/logo.svg"
            className="w-full h-auto object-contain object-center  max-h-[calc(100svh-140px)] md:max-h-none"
            alt="Logo"
          />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HeaderSection;
