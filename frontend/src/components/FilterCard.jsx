import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FilterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend developer",
      "FullStack Developer",
      "Prompt Engineer",
      "AI/ML Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-45k", "45k-60k", "60k-80k", "80k-100k", "100k+"],
  },
];

const FilterCard = () => {
  return (
    <div className="p-5 rounded-2xl shadow-lg bg-white border border-gray-100 text-left flex items-start flex-col">
      <p className="mb-4 font-semibold">Filter Jobs</p>

      <RadioGroup>
        <Accordion
          type="single"
          collapsible
          className="flex gap-6 w-full" // make items in one line
        >
          {FilterData.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.filterType}
              className="w-fit" // shrink to fit each title
            >
              <AccordionTrigger className="text-lg font-bold whitespace-nowrap">
                {item.filterType}
              </AccordionTrigger>
              <AccordionContent className="mt-2">
                {item.array.map((data, idx) => (
                  <div key={idx} className="flex items-center space-x-2 my-1">
                    <RadioGroupItem
                      value={data}
                      id={`${item.filterType}-${idx}`}
                    />
                    <label htmlFor={`${item.filterType}-${idx}`}>
                      {data}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
