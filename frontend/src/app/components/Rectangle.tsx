import React from "react";

const Rectangle = ({
  margin,
  position = "relative",
  top,
  bottom,
  left,
  right,
  width = "w-[134px]",
  height = "h-[189px]",
}: {
  margin?: string;
  position?: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div
      className={`bg-gradient-to-t from-[#F9F0E5] from-30% to-white to-70% ${width} ${height}  ${position} z-0 ${margin} ${top} ${bottom} ${left} ${right}`}
    ></div>
  );
};

export default Rectangle;
