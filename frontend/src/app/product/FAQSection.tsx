"use client";
import React from "react";
import LeadText from "../components/LeadText";
import { Accordion, AccordionItem } from "@nextui-org/react";
import PlusIcon from "@/icons/PlusIcon";
import MinusIcon from "@/icons/MinusIcon";
import Image from "next/image";
import Rectangle from "../components/Rectangle";
import StarIcon from "@/icons/StarIcon";
import ProductButton from "../components/ProductButton";
import Photo from "../components/Photo";

const faq = [
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const FAQSection = () => {
  return (
    <div className="inline-block w-full p-[8%]">
      <div className="flex flex-row gap-10">
        <div className="lg:w-1/2 lg:pl-20 flex-1">
          <div className="text-center lg:text-left">
            <LeadText size="text-[32px]">Frequently asked questions.</LeadText>
          </div>
          <div className="py-10">
            <Accordion>
              {faq.map((val: any, index) => (
                <AccordionItem
                  key={index + 1}
                  aria-label={`Accordion ${index + 1}`}
                  title={<LeadText size="text-[18px]">{val.question}</LeadText>}
                  indicator={({ isOpen }) =>
                    isOpen ? <MinusIcon /> : <PlusIcon />
                  }
                >
                  {val.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="block lg:hidden text-center pt-10 lg:px-10">
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
        {/* Collage */}
        <div className="hidden w-1/2 lg:flex flex-1">
          <Photo
            src="/images/faq_image.png"
            alt="faq image "
            width="w-[441px]"
            height="h-[602px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
