"use client";
import React from "react";
import LeadText from "../components/LeadText";
import { Accordion, AccordionItem } from "@nextui-org/react";
import PlusIcon from "@/icons/PlusIcon";
import MinusIcon from "@/icons/MinusIcon";

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
      <div className="w-1/2 pl-20">
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
    </div>
  );
};

export default FAQSection;
