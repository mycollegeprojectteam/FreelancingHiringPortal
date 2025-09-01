import React, { useState } from "react";
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
      "Backend Developer",
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
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (filterType, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleClearAll = () => {
    setSelectedFilters({});
    setSearchTerm("");
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Filter Jobs
        </h2>
        <button
          onClick={handleClearAll}
          className="text-sm text-[#1DA1F2] hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search filters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
      />

      {/* Active Filter Badges */}
      {Object.keys(selectedFilters).length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.entries(selectedFilters).map(([key, value]) => (
            <span
              key={key}
              className="bg-[#1DA1F2] text-white px-3 py-1 rounded-full text-xs"
            >
              {value}
            </span>
          ))}
        </div>
      )}

      {/* Filters Accordion */}
      <RadioGroup>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          {FilterData.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.filterType}
              className="flex-1 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <AccordionTrigger className="px-4 py-3 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100 rounded-t-xl">
                {item.filterType}
                <span className="text-gray-400">▼</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 flex flex-col gap-2 max-h-60 overflow-y-auto">
                {item.array
                  .filter((data) =>
                    data.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((data, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 hover:bg-[#e6f2ff] p-1 rounded cursor-pointer transition"
                      onClick={() => handleSelect(item.filterType, data)}
                    >
                      <RadioGroupItem
                        value={data}
                        id={`${item.filterType}-${idx}`}
                        checked={selectedFilters[item.filterType] === data}
                        className="accent-[#1DA1F2] cursor-pointer"
                      />
                      <label
                        htmlFor={`${item.filterType}-${idx}`}
                        className="text-gray-700 text-sm cursor-pointer"
                      >
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
