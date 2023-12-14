import { Spacer } from "@nextui-org/react";
import React from "react";
import IconAvatar from "./IconAvatar";
interface Props {
  icon: React.ReactNode;
  text: string;
}
const ListwithIcon = ({ icon, text }: Props) => {
  return (
    <div className="flex flex-row items-start justify-start py-4">
      <IconAvatar>{icon}</IconAvatar>
      <Spacer x={5} />
      <p className="text-[#676869] text-[15px]">{text}</p>
    </div>
  );
};

export default ListwithIcon;
