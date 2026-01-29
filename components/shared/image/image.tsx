import Image from "next/image";

type Props = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
};

const ImageComponent = (props: Props) => {
  const { src, className, width = 500, height = 500, alt = "" } = props;

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
