import React from "react";
import Image from "next/image";

const artboards = [
  "Artboard2_1",
  "Artboard3_1",
  "Artboard4_1",
  "Artboard5_1",
  "Artboard6_1",
];

const TopBenefits = () => {
  return (
    <div className="inline-block w-full">
      <div className="bg-gradient-to-b from-[#F9F0E5] to-white px-32 py-28">
        <p className="align-center">as seen in</p>
        <div className="flex flex-row ">
          {artboards.map((artboard, index) => (
            <div className="w-full" key={index}>
              <Image
                src={`/images/artboard/${artboard}.png`}
                alt="The eco hub"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBenefits;
