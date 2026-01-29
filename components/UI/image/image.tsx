import Image from "next/image";

type Props = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  loading?: "lazy" | "eager";
};

const ImageComponent = (props: Props) => {
  const {
    src,
    className,
    width = 500,
    height = 500,
    alt = "",
    loading = "lazy",
  } = props;

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default ImageComponent;
