import React from "react";
import LeadText from "../components/LeadText";
import CartIcon from "@/icons/CartIcon";
import OrderCards from "../components/OrderCards";
import TruckIcon from "@/icons/TruckIcon";
import SunMoonIcon from "@/icons/SunMoonIcon";
import ProductButton from "../components/ProductButton";
import StarIcon from "@/icons/StarIcon";

const OrderSection = () => {
  return (
    <div className="inline-block w-full p-24 text-center">
      <div className="pb-10">
        <LeadText size="text-[32px]">Comfort made easy</LeadText>
      </div>
      <div className="flex flex-row gap-10">
        <OrderCards
          bg=" bg-[#EDEDED]"
          icon={<CartIcon width="50" height="50" />}
          title="You save."
          text="Browse our comfort sets and save 15% when you bundle."
        />
        <OrderCards
          bg=" bg-[#F9F0E6]"
          icon={<TruckIcon width="50" height="50" />}
          title="We ship."
          text="We ship your items within 1-2 days of receiving your order."
        />
        <OrderCards
          bg=" bg-[#EDEDED]"
          icon={<SunMoonIcon width="50" height="50" />}
          title="You enjoy!"
          text="Wear hernest around the house, out on the town, or in bed."
        />
      </div>
      <div className="text-center pt-10 px-10">
        <ProductButton />
        <div className="flex flex-row items-center justify-center gap-2 py-3">
          <div className="flex flex-row gap-1 ">
            {[1, 2, 3, 4, 5].map((num) => (
              <StarIcon key={num} />
            ))}
          </div>
          <p className="text-[12px] text-[#828282]">
            One of 500+ 5 Star Reviews Online
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
