import React from "react";
import LeadText from "../components/LeadText";
import Rectangle from "../components/Rectangle";
import Image from "next/image";
import ProductButton from "../components/ProductButton";
import { Divider } from "@nextui-org/react";
import ClockIcon from "@/icons/ClockIcon";
import TruckIcon from "@/icons/TruckIcon";
import FooterDetails from "../components/FooterDetails";
import ShieldIcon from "@/icons/ShieldIcon";
import CartIcon from "@/icons/CartIcon";

const FinalCTASection = () => {
  return (
    <div className="inline-block w-full pt-24 pb-20 px-24 bg-gradient-to-t from-[#F9F0E5] from-10% via-white via-40% to-white to-90%">
      <div className="flex flex-col items-center justify-center">
        <LeadText size="text-[32px]">Find something you love.</LeadText>
        <p className="text-[15px] text-[#676869] text-center w-1/3 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
        {/* Image Collage */}
        <div className="flex flex-row items-center justify-center py-14">
          <Rectangle margin="mr-[-60px]" />
          <Image
            src={"/images/photo5.png"}
            alt="photo5"
            width={209}
            height={317}
            className="ml-[-30px] relative z-10"
          />
          <Image
            src={"/images/photo6.png"}
            alt="photo6"
            width={260}
            height={423}
            className="border-3 border-white relative z-20"
          />
          <Image
            src={"/images/photo1.png"}
            alt="photo1"
            width={209}
            height={317}
            className="mr-[-30px] relative z-10"
          />
          <Rectangle margin="ml-[-60px]" />
        </div>
        <ProductButton />
        {/* Payment portals */}
        <div className="flex flex-row gap-2 items-center justify-center py-1">
          <ClockIcon />
          <p className="text-[10px] text-[#1FAD40]">Ships in 1-2 Days</p>
          <Divider orientation="vertical" className="border-[#C4C4C4] h-4" />
          <Image
            src={"/images/payment_portals.png"}
            alt="payment portals"
            width={240}
            height={22}
          />
        </div>
        {/* Footer */}
        <div className="flex flex-row items-center justify-center w-1/2 p-5">
          <FooterDetails
            icon={<TruckIcon width="18" height="18" />}
            text="FREE Shipping on Orders over $200"
          />
          <Divider orientation="vertical" className="border-[#C4C4C4] h-14" />
          <FooterDetails
            icon={<ShieldIcon width="18" height="18" />}
            text="Over 500+ 5 Star Reviews Online"
          />
          <Divider orientation="vertical" className="border-[#C4C4C4] h-14" />
          <FooterDetails
            icon={<CartIcon width="18" height="18" />}
            text="Made ethically and responsibly."
          />
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
