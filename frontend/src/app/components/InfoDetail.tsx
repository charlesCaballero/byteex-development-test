import React from "react";
import LeadText from "./LeadText";

const InfoDetail = ({
  info,
  detail,
  icon,
}: {
  info: string;
  detail: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="w-full lg:w-1/3 p-5">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="bg-[#E4E4E4] rounded-full p-2 mb-2">{icon}</div>
        <LeadText size="text-[22px]">{info}</LeadText>
        <p className="text-[14px] text-[#15005B] p-1">{detail}</p>
      </div>
    </div>
  );
};

export default InfoDetail;
