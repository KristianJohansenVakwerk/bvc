import HeaderSection from "../headerSection/headerSection";
import InstagramSection from "../instagramSection/instagramSection";
import ProductsSection from "../productsSection/productsSection";
import ProductInformationSection from "../productInformationSection/productInformationSection";
import ContactSection from "../contactSection/contactSection";
import RetailersSection from "../retailersSection/retailersSection";
import MoodSection from "../moodSection/moodSection";
import type { Section } from "@/types/data";

type Props = {
  section: Section;
};

const SectionRenderer = (props: Props) => {
  const { section } = props;

  switch (section.id) {
    case "header":
      return <HeaderSection data={section.data} />;
    case "contact":
      return <ContactSection data={section.data} />;
    case "products":
      return <ProductsSection data={section.data} />;
    case "instagram":
      return <InstagramSection data={section.data} />;
    case "mood":
      return <MoodSection data={section.data} />;
    case "productInformation":
      return <ProductInformationSection data={section.data} />;
    case "retailers":
      return <RetailersSection data={section.data} />;
    default:
      return null;
  }
};

export default SectionRenderer;
