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

const artboards = [artboard1, artboard2, artboard3, artboard4, artboard5];

const TopBenefits = () => {
  return (
    <div className="inline-block w-full">
      <div className="bg-gradient-to-b from-[#F9F0E5] from-10% via-white via-40% to-white to-90% px-32 py-20">
        {/* Artboard */}
        <p className="text-center text-[#868787] text-[20px] font-semibold pb-2">
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
        <div className="flex flex-row pt-20">
          <div className="w-1/2">
            <div className="pb-14">
              <LeadText size="text-[48px]">
                Loungewear you can be proud of.
              </LeadText>
            </div>
            <div className="py-4">
              <ListwithIcon
                icon={<CartIcon />}
                title="Ethically sourced."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
              />
              <ListwithIcon
                icon={<LeafIcon />}
                title="Responsibly made."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
              />
              <ListwithIcon
                icon={<SunMoonIcon />}
                title="Made for living in."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
              />
              <ListwithIcon
                icon={<WaveIcon width="20" height="20" />}
                title="Unimaginably comfortable."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. "
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="grow">
              <p>Carousel Here....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBenefits;
