import React from "react";

const LeadText = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: string;
}) => {
  return (
    <h1
      className={`${size} font-semibold text-[#01005B] leading-normal font-sans `}
    >
      {children}
    </h1>
  );
};

export default LeadText;
