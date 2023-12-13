import React from "react";
import LeadText from "./LeadText";

const OrderCards = ({
  icon,
  title,
  text,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bg: string;
}) => {
  return (
    <div
      className={`w-1/3 p-14 ${bg} flex flex-col items-center justify-center rounded-md`}
    >
      <div className="p-3">{icon}</div>
      <LeadText size="text-[22px]">{title}</LeadText>
      <p className="text-center text-[#676869] text-[#15px] leading-[23px] py-5">
        {text}
      </p>
    </div>
  );
};

export default OrderCards;
