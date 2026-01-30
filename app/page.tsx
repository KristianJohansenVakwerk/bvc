import { Box, Image, SectionRenderer } from "@/components";
import data from "@/public/data.json";
import type { Data } from "@/types/data";

const typedData = data as Data;

export default function Home() {
  const contactSection = typedData.sections.find(
    (section) => section.id === "contact"
  );

  return (
    <>
      <Box className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center pointer-events-none">
        <Image src="/media/BVC_logo.svg" alt="Logo" width={148} height={138} />
      </Box>
      <Box className="flex flex-col min-h-screen items-start justify-start py-2 p-0 md:p-4 gap-4  md:gap-5">
        {typedData.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
        {contactSection && (
          <SectionRenderer key="contact-last" section={contactSection} />
        )}
      </Box>
    </>
  );
}
