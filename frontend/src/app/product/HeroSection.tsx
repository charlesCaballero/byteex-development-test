import SunMoonIcon from "@/icons/SunMoonIcon";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ListwithIcon from "../components/ListwithIcon";
import ArrowIcon from "@/icons/ArrowIcon";
import Rectangle from "../components/Rectangle";
import WaveIcon from "@/icons/WaveIcon";
import CartIcon from "@/icons/CartIcon";
import StarIcon from "@/icons/StarIcon";
import LeadText from "../components/LeadText";

const HeroSection = () => {
  return (
    <div className="inline-block w-full">
      {/* Header */}
      <div className="w-full min-h-[36px] bg-[#F9F0E5] flex items-center justify-center">
        <p className="leading-[35px] font-normal text-[#565656] opacity-80 text-[11px]">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders &gt; $200 | easy 45 day return window.
        </p>
      </div>
      <div className="px-[6%]">
        {/* Logo */}
        <div className="py-9">
          <Image
            src={"/images/logo.png"}
            alt="Byteex logo"
            width={200}
            height={35.33}
          />
        </div>
        {/* Hero Content */}
        <div className="flex flex-row p-2">
          <div className="w-1/2">
            <LeadText size="text-[58px]">
              Don&apos;t apologize for being comfortable.
            </LeadText>
            <div className="p-3">
              <div className="py-5">
                <ListwithIcon
                  icon={<SunMoonIcon />}
                  text="Beautiful, comfortable loungewear for day or night."
                />
                <ListwithIcon
                  icon={<CartIcon />}
                  text="No wasteful extras, like tags or plastic packaging."
                />
                <ListwithIcon
                  icon={<WaveIcon />}
                  text="Our signature fabric is incredibly comfortable — unlike anything you've ever felt."
                />
              </div>
              <Button
                className="rounded-md bg-[#01005B] px-20 py-8 text-[18px] text-white"
                endContent={<ArrowIcon />}
              >
                Customize Your Outfit
              </Button>
            </div>
          </div>
          {/* Featured Images */}
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <div className="flex flex-row items-center justify-center">
              <Rectangle margin="mr-[-60px]" />
              <Image
                src={"/images/photo1.png"}
                alt="photo1"
                width={209}
                height={317}
                className="mr-[-30px] relative z-10"
              />
              <Image
                src={"/images/photo3.jpg"}
                alt="photo1"
                width={260}
                height={423}
                className="border-3 border-white relative z-20"
              />
              <Image
                src={"/images/photo2.png"}
                alt="photo1"
                width={209}
                height={317}
                className="ml-[-30px] relative z-10"
              />
              <Rectangle margin="ml-[-60px]" />
            </div>
          </div>
        </div>
        {/* Customer feedback */}
        <div className="mb-[-85px] mt-14 mx-5">
          <Card className="w-[450px] h-[172px] p-2">
            <CardHeader>
              <div className="flex flex-row gap-5 items-center justify-center">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/images/Amy_Profile_pic.png"
                />
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Amy P.
                </h4>
                <div className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <StarIcon key={num} />
                  ))}
                </div>
                <p className="text-[11px] text-[#828282]">
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
