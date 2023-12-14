import React from "react";
import LeadText from "../components/LeadText";
import ProductButton from "../components/ProductButton";
import Image from "next/image";
import Photo from "../components/Photo";

const AboutSection = () => {
  return (
    <div className="inline-block w-full bg-[#F0EEEF] p-5 md:p-10">
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 px-5 md:px-10">
        {/* Images */}
        {/* Collage */}
        <div className="md:col-span-1 sm:col-span-full">
          <div className="relative w-full p-10">
            <Photo
              src={"/images/photo3.png"}
              height={"h-[550px]"}
              width={"w-[330px]"}
              margin="m-auto my-28"
              alt="photo1"
            />
            <div className="absolute left-1/4 transform -translate-x-1/5 top-24 z-10 border-4 border-white">
              <Image
                src={"/images/photo1.png"}
                height={125}
                width={115}
                alt="photo1"
                className="block object-cover w-full h-full"
              />
            </div>
            <div className="absolute right-1/4 transform translate-x-1/5 bottom-24 z-10 border-4 border-white">
              <Image
                src={"/images/photo4.png"}
                height={125}
                width={115}
                alt="photo1"
                className="block object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-1 sm:col-span-full py-5 md:py-10 pr-5 md:pr-10">
          {/* Content text */}
          <LeadText size="text-[24px] md:text-[32px]">
            Be your best self.
          </LeadText>
          <p className="leading-[23px] font-normal text-[#6C6C6C] text-[15px] py-5 mb-6">
            Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____.{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. <br />
            <br />
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula. <br />
            <br />
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. <br />
            <br />
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh. <br />
            <br />
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien. <br />
            <br />
            Cras mattis varius mollis.
          </p>
          <ProductButton />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
