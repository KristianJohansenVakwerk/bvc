import { Grid, GridItem, Image, Section } from "@/components";

type Props = {
  data: string[];
};

const MoodSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="w-full px-2 md:px-0">
      <Grid cols={1} colsTablet={1} colsDesktop={3} gap={0}>
        {data.map((src, index) => (
          <GridItem key={index} colspan={1}>
            <Image
              src={src}
              className="w-full h-full object-cover"
              alt={`Mood ${index + 1}`}
            />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default MoodSection;
