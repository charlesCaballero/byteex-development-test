import React from "react";
import LeadText from "../components/LeadText";
import InfoDetail from "../components/InfoDetail";
import CloudIcon from "@/icons/CloudIcon";
import WaterIcon from "@/icons/WaterIcon";
import LightningIcon from "@/icons/LightningIcon";
import { Divider } from "@nextui-org/react";

const InfoBannerSection = () => {
  return (
    <div className="inline-block w-full text-center p-[6%] bg-[#F0EEEF]">
      <div className="p-5">
        <LeadText size="text-[25px]">Our total green impact</LeadText>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-10 lg:px-0 lg:w-1/2">
          <InfoDetail
            icon={<CloudIcon width="30" height="30" />}
            info="3,927 kg"
            detail="of CO2 saved"
          />
          <Divider
            orientation="vertical"
            className="border-[#C4C4C4] h-32 hidden lg:block"
          />
          <Divider
            orientation="horizontal"
            className="border-[#C4C4C4] block lg:hidden"
          />
          <InfoDetail
            icon={<WaterIcon width="30" height="30" />}
            info="2,546,167 days"
            detail="of drinking water saved"
          />
          <Divider
            orientation="vertical"
            className="border-[#C4C4C4] h-32 hidden lg:block"
          />
          <Divider
            orientation="horizontal"
            className="border-[#C4C4C4] block lg:hidden"
          />
          <InfoDetail
            icon={<LightningIcon width="30" height="30" />}
            info="7,321 kWh"
            detail="of energy saved"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBannerSection;
