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
import Photo from "../components/Photo";

const HeroSection = () => {
  return (
    <div className="inline-block w-full">
      {/* Header */}
      <div className="w-full min-h-[36px] bg-[#F9F0E5] flex items-center justify-center">
        <p className="leading-[35px] font-normal text-[#565656] opacity-80 text-[11px] text-center">
          <span className="md:inline-block sm:hidden">
            CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
          </span>
          <span className="inline-block pl-3 sm:hidden">|</span>
          <span className="inline-block px-3">
            FREE SHIPPING on orders &gt; $200
          </span>
          <span className="inline-block pr-3 sm:hidden">|</span>
          <span className="md:inline-block sm:hidden">
            easy 45 day return window.
          </span>
        </p>
      </div>
      <div className="px-[6%]">
        {/* Logo */}
        <div className="flex py-9 px-1 lg:justify-start md:justify-center sm:justify-center">
          <Image
            src={"/images/logo.png"}
            alt="Byteex logo"
            width={200}
            height={35.33}
          />
        </div>
        {/* Hero Content */}
        <div className="grid grid-rows-3 grid-cols-7 gap-1 pt-10">
          <div className="lg:col-span-3 sm:col-span-full lg:text-left md:text-center sm:text-center w-full">
            <LeadText size="md:text-[58px] sm:text-[26px]">
              Don&apos;t apologize for being comfortable.
            </LeadText>
          </div>

          {/* Featured Images */}
          <div className="row-span-3 lg:col-span-4 md:col-span-full sm:col-span-full w-full items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <Rectangle
                margin="mr-[-80px]"
                height="lg:h-[289px] md:h-[189px]"
              />
              <Photo
                src={"/images/photo1.png"}
                alt="photo1"
                width="w-[300px]"
                height={"h-[400px]"}
                zIndex="z-10"
                margin="mr-[-60px]"
              />
              <Photo
                src={"/images/photo3.png"}
                alt="photo1"
                width={"w-[360px]"}
                height={"h-[523px]"}
                zIndex="z-20"
                border="border border-2 border-white"
              />
              <Photo
                src={"/images/photo2.png"}
                alt="photo1"
                width={"w-[300px]"}
                height={"h-[400px]"}
                zIndex="z-10"
                margin="ml-[-60px]"
              />
              <Rectangle
                margin="ml-[-80px]"
                height="lg:h-[289px] md:h-[189px]"
              />
            </div>
          </div>
          <div className="row-span-2 md:col-span-3 sm:col-span-full">
            <div className="py-5">
              <ListwithIcon
                icon={<SunMoonIcon width="18" height="18" />}
                text="Beautiful, comfortable loungewear for day or night."
              />
              <ListwithIcon
                icon={<CartIcon width="18" height="18" />}
                text="No wasteful extras, like tags or plastic packaging."
              />
              <ListwithIcon
                icon={<WaveIcon width="15" height="15" />}
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
