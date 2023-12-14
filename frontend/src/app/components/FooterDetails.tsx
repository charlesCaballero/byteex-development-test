import React from "react";

const FooterDetails = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 ">
      <div className="flex flex-row items-center justify-center px-7">
        <div className="rounded-full p-2 bg-[#666666] bg-opacity-10  mr-5">
          {icon}
        </div>
        <p className="text-sm text-[#676869] leading-5 ">{text}</p>
      </div>
    </div>
  );
};

export default FooterDetails;
