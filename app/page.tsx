import { Box, SectionRenderer } from "@/components";
import data from "@/public/data.json";
import type { Data } from "@/types/data";

const typedData = data as Data;

export default function Home() {
  const contactSection = typedData.sections.find(
    (section) => section.id === "contact"
  );

  return (
    <Box className="flex flex-col min-h-screen items-start justify-start p-4 gap-5">
      {typedData.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
      {contactSection && (
        <SectionRenderer key="contact-last" section={contactSection} />
      )}
    </Box>
  );
}
