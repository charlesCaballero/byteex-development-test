import React from "react";

const Rectangle = ({ margin }: { margin: string }) => {
  return (
    <div
      className={`bg-gradient-to-t from-[#F9F0E5] to-white w-[134px] h-[189px] relative z-0 ${margin}`}
    ></div>
  );
};

export default Rectangle;
