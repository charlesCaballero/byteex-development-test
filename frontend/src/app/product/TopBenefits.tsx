import React from "react";
import Image from "next/image";
import artboard1 from "./_images/Artboard3_1.png";
import artboard2 from "./_images/Artboard6_1.png";
import artboard3 from "./_images/Artboard4_1.png";
import artboard4 from "./_images/Artboard2_1.png";
import artboard5 from "./_images/Artboard5_1.png";
import LeadText from "../components/LeadText";
import ListwithIcon from "../components/ListwithIcon";
import CartIcon from "@/icons/CartIcon";
import WaveIcon from "@/icons/WaveIcon";
import SunMoonIcon from "@/icons/SunMoonIcon";
import LeafIcon from "@/icons/LeafIcon";
import { Divider } from "@nextui-org/divider";
import StarIcon from "@/icons/StarIcon";
import ProductButton from "../components/ProductButton";
import Photo from "../components/Photo";

const artboards = [artboard1, artboard2, artboard3, artboard4, artboard5];

const TopBenefits = () => {
  return (
    <div className="inline-block w-full">
      <div className="bg-gradient-to-b from-[#F9F0E5] from-10% via-white via-40% to-white to-90% px-[8%] pt-20 pb-10 lg:px-32 lg:py-20">
        {/* Artboard */}
        <p className="text-center text-[#868787] text-[20px] font-semibold py-2">
          as seen in
        </p>
        <div className="flex flex-row items-center justify-center">
          {artboards.map((artboard, index) => {
            const padding =
              index === 0
                ? "pr-16"
                : index === artboards.length - 1
                ? "pl-16"
                : "px-16";
            return (
              <div className={padding} key={index}>
                <Image src={artboard} alt={`artboard-${index}`} />
              </div>
            );
          })}
        </div>
        {/* Main content */}
        <div className="block py-3 lg:content-center lg:grid lg:grid-rows-6 lg:grid-cols-6 lg:grid-flow-col-dense w-full">
          <div className="text-center lg:text-left lg:row-span-1 lg:col-span-3 lg:grid lg:content-end lg:gap-10">
            <LeadText size="text-[26px] md:text-[38px]">
              Loungewear you can be proud of.
            </LeadText>
          </div>
          <div className="flex justify-center lg:row-span-full lg:col-span-3 lg:grid lg:justify-items-center lg:content-center">
            {/* Carousel 
            Image loaded is temporary
            */}
            <Photo
              src="/images/photo3.png"
              alt="carousel image"
              width="w-[250px] lg:w-[450px]"
              height="h-[400px] lg:h-[700px]"
            />
          </div>
          <div className="lg:pt-10 lg:row-span-5 lg:col-span-3">
            <ListwithIcon
              icon={<CartIcon />}
              title="Ethically sourced."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
            />
            <Divider className="block lg:hidden" />
            <ListwithIcon
              icon={<LeafIcon />}
              title="Responsibly made."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
            />
            <Divider className="block lg:hidden" />
            <ListwithIcon
              icon={<SunMoonIcon />}
              title="Made for living in."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
            />
            <Divider className="block lg:hidden" />
            <ListwithIcon
              icon={<WaveIcon width="20" height="20" />}
              title="Unimaginably comfortable."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
            />
            <div className="text-center pt-10 lg:px-10">
              <div className="flex flex-col justify-center items-center lg:items-start">
                <ProductButton />
                <div className="flex flex-row items-center justify-center gap-2 pt-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBenefits;
