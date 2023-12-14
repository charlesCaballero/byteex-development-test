import Image from "next/image";
import React from "react";

const Photo = ({
  src,
  alt,
  width,
  height,
  zIndex,
  margin,
  border,
}: {
  src: string;
  alt: string;
  width: string;
  height: string;
  zIndex?: string;
  margin?: string;
  border?: string;
}) => {
  return (
    <div
      className={`relative ${width} ${height} ${zIndex} ${margin} ${border}`}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
    </div>
  );
};

export default Photo;
