import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FilterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend developer", "FullStack Developer", "Prompt Engineer", "AI/ML Engineer"]
    },
    {
        filterType: "Salary",
        array: ["0-45k", "45k-60k", "60k-80k", "80k-100k", "100k+"]
    }
]

const FilterCard = () => {
    return (
        <div className=" p-5 rounded-2xl shadow-lg bg-white border border-gray-100 text-left h-fit w-[calc(100%-10%)]">
            <p>Filter Jobs</p>
            <hr className="my-4 text-gray-300 "/>
            <RadioGroup className="space-y-4 mt-4">
                {
                    FilterData.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-lg font-bold">{item.filterType}</h1>
                            {
                                item.array.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <RadioGroupItem value={data} />
                                            <label>{data}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>

        </div>
    );
};

export default FilterCard;
