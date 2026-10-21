import NextImage, { type ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps;

export function Image({
  alt,
  fill,
  ...props
}: ImageProps) {
  return (
    <NextImage
      {...props}
      alt={alt}
      fill={fill}
    />
  );
}
