import { Link, Section, Text } from "@/components";

type Props = {
  data: { text: string; link: string };
};

const InstagramSection = (props: Props) => {
  const { data } = props;

  return (
    <Section className="w-full px-2 md:px-0">
      <Link
        href={data.link}
        target="_blank"
        className="flex items-center gap-1 underline underline-offset-8 decoration-1"
      >
        <Text text={data.text} typeface="sans" />
      </Link>
    </Section>
  );
};

export default InstagramSection;
