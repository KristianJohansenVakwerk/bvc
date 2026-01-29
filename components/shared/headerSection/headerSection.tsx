import { Grid, GridItem, Image, Section, Text } from "@/components";

type Props = {
  data: string[];
};

const HeaderSection = (props: Props) => {
  const { data } = props;

  return (
    <Section>
      <Grid cols={1} colsTablet={2} colsDesktop={2} gap={2.5}>
        <GridItem colspan={1} className="max-h-[390px]">
          <Image
            src="/media/logo.svg"
            className="w-full h-full object-contain"
            alt="Logo"
          />
        </GridItem>
        {data.map((htmlContent, columnIndex) => (
          <GridItem key={columnIndex} colspan={1}>
            <Text text={htmlContent} typeface="sans" size="2xl" />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default HeaderSection;
