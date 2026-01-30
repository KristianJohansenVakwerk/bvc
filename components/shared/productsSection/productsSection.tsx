import { Grid, GridItem, Image, Section, Text } from "@/components";
import type { Product } from "@/types/data";

type Props = {
  data: Product[];
};

const ProductsSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="w-full">
      <Grid
        cols={1}
        colsTablet={2}
        colsDesktop={4}
        gap={2.5}
        className="grid-cols-[repeat(12,minmax(75vw,1fr))] md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible w-full scrollbar-hide pl-2 md:pl-0"
      >
        {data.map((product, index) => (
          <GridItem key={index} colspan={1} className="flex flex-col gap-2.5">
            <Image
              src={product.imageSrc}
              className="w-full h-auto aspect-[390/400] mix-blend-multiply"
              alt={product.name}
            />
            <Text text={product.name} typeface="sans" className="tracking-3" />

            <Text text={product.text} typeface="sans" className="tracking-3" />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductsSection;
