import React from "react";
import LeadText from "../components/LeadText";
import ProductButton from "../components/ProductButton";
import Image from "next/image";
import Photo from "../components/Photo";

const AboutSection = () => {
  return (
    <div className="inline-block w-full bg-[#F0EEEF] p-[6%]">
      <div className="block py-3  lg:grid lg:grid-rows-5 lg:grid-cols-6 lg:grid-flow-col-dense w-full">
        {/* Content text */}
        <div className="text-center lg:order-2 lg:text-left lg:row-span-1 lg:col-span-3 lg:grid lg:content-start">
          <LeadText size="text-[24px] md:text-[32px]">
            Be your best self.
          </LeadText>
        </div>
        {/* Collage */}
        <div className="flex justify-center lg:grid  lg:row-span-full lg:col-span-3 lg:order-1">
          <Photo
            src="/images/about_image.png"
            alt="about_image"
            width="w-[324px] lg:w-[524px]"
            height="h-[464px] lg:h-[664px]"
          />
        </div>

        <div className="lg:row-span-4 lg:col-span-3 lg:order-3">
          <p className="leading-[23px] font-normal text-[#6C6C6C] text-[15px]  mb-6">
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
          <div className="hidden lg:block">
            <ProductButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
