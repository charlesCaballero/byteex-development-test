import { Spacer } from "@nextui-org/react";
import React from "react";
interface Props {
  icon: React.ReactNode;
  text: string;
}
const ListwithIcon = ({ icon, text }: Props) => {
  return (
    <div className="flex flex-row items-center justify-start py-4">
      {icon}
      <Spacer x={3} />
      <p className="text-[#676869] text-[15px]">{text}</p>
    </div>
  );
};

export default ListwithIcon;
