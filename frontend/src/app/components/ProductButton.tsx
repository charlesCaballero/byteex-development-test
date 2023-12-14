import ArrowIcon from "@/icons/ArrowIcon";
import { Button } from "@nextui-org/react";
import React from "react";

const ProductButton = () => {
  return (
    <div className="text-center lg:text-left">
      <Button
        className="rounded-md bg-[#01005B] px-20 py-8 text-[18px] text-white"
        endContent={<ArrowIcon />}
      >
        Customize Your Outfit
      </Button>
    </div>
  );
};

export default ProductButton;
