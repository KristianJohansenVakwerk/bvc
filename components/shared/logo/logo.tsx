import { Box, Image } from "@/components";


const Logo = () => {
  

  return (
    <Box className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit ` z-50 flex items-center justify-center pointer-events-none">
      <Image src="/media/BVC_Logo.svg" alt="BVCLogo" width={148} height={138} />
    </Box>
  );
};

export default Logo;

