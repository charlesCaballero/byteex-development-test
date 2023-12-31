import { Spacer } from "@nextui-org/react";
import React from "react";
import IconAvatar from "./IconAvatar";
interface Props {
  icon: React.ReactNode;
  title?: string;
  text: string;
}
const ListwithIcon = ({ icon, text, title }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start py-8 lg:py-4 pr-3`}
    >
      <IconAvatar>{icon}</IconAvatar>
      <Spacer x={3} />
      <div className="flex flex-col px-3 text-center lg:text-left">
        {title && <h6 className="text-[22px] text-[#01005B]">{title}</h6>}
        <p className="text-[#676869] text-[15px] py-2">{text}</p>
      </div>
    </div>
  );
};

export default ListwithIcon;
