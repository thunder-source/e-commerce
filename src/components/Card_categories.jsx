import { useGetProductsQuery } from "../redux/services/eCommerceApi";
import React, { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Card_categories({ categoryData }) {
  const { filter, selectFilter, categoryFilteredData } = useSelector(
    (state) => state.filter
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-full">
      {categoryData.map((categoryElement) => {
        for (const i of filter[0].options) {
          if (i.checked && categoryElement[0] === i.value) {
            return (
              <div className="w-full flex flex-col" key={categoryElement[0]}>
                <h1 className="font-semibold bg-gray-800 p-5 rounded-md capitalize text-white mb-5 text-4xl text-center">
                  {categoryElement[0]}
                </h1>
                <div className="w-full flex flex-wrap gap-4 mb-10">
                  {categoryElement[1].map((element) => {
                    return <Card key={element.id} data={element} />;
                  })}
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}
