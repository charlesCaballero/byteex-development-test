import SunMoonIcon from "@/icons/SunMoonIcon";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import IconOnlyList from "../components/IconOnlyList";
import ArrowIcon from "@/icons/ArrowIcon";
import Rectangle from "../components/Rectangle";
import WaveIcon from "@/icons/WaveIcon";
import CartIcon from "@/icons/CartIcon";
import StarIcon from "@/icons/StarIcon";
import LeadText from "../components/LeadText";
import Photo from "../components/Photo";
import ProductButton from "../components/ProductButton";

const HeroSection = () => {
  return (
    <div className="inline-block w-full">
      {/* Header */}
      <div className="w-full min-h-[36px] bg-[#F9F0E5] flex items-center justify-center">
        <p className="leading-[35px] font-normal text-[#565656] opacity-80 text-[11px] text-center">
          <span className="hidden md:inline-block">
            CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
          </span>
          <span className="hidden md:inline-block pl-3">|</span>
          <span className="inline-block px-3">
            FREE SHIPPING on orders &gt; $200
          </span>
          <span className="md:inline-block pr-3 hidden">|</span>
          <span className="md:inline-block hidden">
            easy 45 day return window.
          </span>
        </p>
      </div>
      <div className="px-[6%]">
        {/* Logo */}
        <div className="flex pt-9 pb-6 px-1 lg:justify-start justify-center">
          <Image
            src={"/images/logo.png"}
            alt="Byteex logo"
            width={200}
            height={35.33}
          />
        </div>
        {/* Hero Content */}
        <div className="block py-3 lg:grid lg:gap-5 lg:grid-rows-3 lg:grid-cols-7 lg:grid-flow-col-dense">
          <div className="text-center lg:text-left lg:row-span-1 lg:col-span-3 lg:grid lg:content-end">
            <LeadText size="md:text-[38px] text-[26px]">
              Don&apos;t apologize for being comfortable.
            </LeadText>
          </div>

          {/* Featured Images */}
          <div className="lg:row-span-full lg:col-span-4 lg:grid lg:content-center">
            <Photo
              src={"/images/hero_image.png"}
              alt="hero image"
              width="w-[400px] lg:w-[725px]"
              height={"h-[200px] lg:h-[445px]"}
            />
          </div>
          <div className="lg:row-span-2 lg:col-span-3">
            <div className="py-5 ">
              <IconOnlyList
                icon={<SunMoonIcon width="18" height="18" />}
                text="Beautiful, comfortable loungewear for day or night."
              />
              <IconOnlyList
                icon={<CartIcon width="18" height="18" />}
                text="No wasteful extras, like tags or plastic packaging."
              />
              <IconOnlyList
                icon={<WaveIcon width="15" height="15" />}
                text="Our signature fabric is incredibly comfortable — unlike anything you've ever felt."
              />
            </div>
            <ProductButton />
          </div>
        </div>
        {/* Customer feedback */}
        <div className="mb-[-85px] mt-14 mx-5 flex justify-center lg:inline-block ">
          <Card className="w-full lg:w-2/5 h-[172px] py-2">
            <CardHeader>
              <div className="flex flex-row gap-5 items-center justify-center">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/images/Amy_Profile_pic.png"
                />
                <div className="flex flex-col lg:flex-row">
                  <h4 className="text-small font-semibold leading-none text-default-600 order-2 lg:order-1">
                    Amy P.
                  </h4>
                  <div className="flex flex-row gap-1 order-1 lg:order-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <StarIcon key={num} />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] md:text-sm text-[#828282]">
                  One of 500+ 5 Star Reviews Online
                </p>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p className="text-[12px] text-[#676869]">
                Overjoyed with my Loungewear set. I have the jogger and the
                sweatshirt. Quality product on every level. From the compostable
                packaging, to the supplied washing bag, even the garments smells
                like fresh herbs when I first held them.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
