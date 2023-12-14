import React from "react";
import LeadText from "../components/LeadText";
import ProductButton from "../components/ProductButton";

const AboutSection = () => {
  return (
    <div className="inline-block w-full bg-[#F0EEEF] p-10">
      <div className="flex flex-row">
        {/* Images */}
        <div className="w-1/2">{/* images collage */}</div>
        <div className="w-1/2 py-10 pr-10">
          {/* Content text */}
          <LeadText size="text-[32px]">Be your best self.</LeadText>
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
