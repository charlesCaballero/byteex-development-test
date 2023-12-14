"use client";
import React from "react";
import LeadText from "../components/LeadText";
import { Accordion, AccordionItem } from "@nextui-org/react";
import PlusIcon from "@/icons/PlusIcon";
import MinusIcon from "@/icons/MinusIcon";
import Image from "next/image";
import Rectangle from "../components/Rectangle";

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
    <div className="inline-block w-full p-24">
      <div className="flex flex-row">
        <div className="w-1/2 pl-20 flex-1">
          <LeadText size="text-[32px]">Frequently asked questions.</LeadText>
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
        </div>
        {/* Collage */}
        <div className="w-1/2 flex flex-1">
          <div className="relative w-full flex-1">
            <Rectangle position="absolute" top="top-0" left="left-[230px]" />
            <Image
              src={"/images/photo1.png"}
              height={360}
              width={250}
              alt="photo1"
              className=" block absolute left-0 right-0 bottom-0 top-0 m-auto z-10"
            />
            <Image
              src={"/images/photo5.png"}
              height={220}
              width={150}
              alt="photo1"
              className="block absolute right-[190px] -top-12 z-0"
            />
            <Image
              src={"/images/photo7.png"}
              height={159}
              width={216}
              alt="photo1"
              className="block absolute left-[190px] -bottom-12 z-0"
            />
            <Rectangle
              position="absolute"
              bottom="bottom-10"
              right="right-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
