import React from "react";
import LeadText from "../components/LeadText";
import Image from "next/image";
import ProductButton from "../components/ProductButton";
import StarIcon from "@/icons/StarIcon";

const images = Array.from(Array(22).keys());

const ReviewsSection = () => {
  return (
    <div className="inline-block w-full">
      <div className="text-center w-3/4 px-28 mx-auto">
        <LeadText size="text-[32px]">What are our fans saying?</LeadText>
        <p className="leading-[23px] text-[15px] text-[#676869] py-6 px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
      {/* Image collage */}
      <div className="flex flex-row flex-wrap gap-1 w-full px-1 justify-center items-center">
        {images.map((cnt) => {
          return (
            <Image
              src={`/images/reviews_images/image_(${cnt + 1}).png`}
              alt={`image${cnt + 1}`}
              width={125}
              height={125}
              key={`image${cnt + 1}`}
            />
          );
        })}
      </div>
      <div>{/* Carousel of reviews */}</div>
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

export default ReviewsSection;
