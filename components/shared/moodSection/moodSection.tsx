import { Grid, GridItem, Image, Section } from "@/components";
import type { MoodImage } from "@/types/data";

type MoodSectionData = {
  images: MoodImage[];
};

type Props = {
  data: MoodSectionData;
};

const MoodSection = (props: Props) => {
  const { data } = props;
  const { images } = data;

  return (
    <Section className="w-full px-2 md:px-0">
      <Grid cols={1} colsTablet={1} colsDesktop={3} gap={0}>
        {images.map((item, index) => {
          const itemStyle = {
            ["--mood-scale-mobile" as string]: item.scale.mobile,
            ["--mood-origin-mobile" as string]: item.origin.mobile,
            ["--mood-object-position-mobile" as string]:
              item.objectPosition?.mobile ?? "50% 50%",
            ["--mood-scale-desktop" as string]: item.scale.desktop,
            ["--mood-origin-desktop" as string]: item.origin.desktop,
            ["--mood-object-position-desktop" as string]:
              item.objectPosition?.desktop ?? "50% 50%",
          };

          return (
            <GridItem
              key={index}
              colspan={1}
              className="aspect-[343/233] md:aspect-[543/814] min-h-0 overflow-hidden"
              style={itemStyle}
            >
              <Image
                src={item.src}
                className="mood-image w-full h-full object-cover"
                alt={`Mood ${index + 1}`}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
};

export default MoodSection;
