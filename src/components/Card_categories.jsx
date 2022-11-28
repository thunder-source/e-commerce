import { useGetProductsQuery } from "../redux/services/eCommerceApi";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import Error from "./utilities/Error";
export default function Card_categories({ sortedData, selectedBrand }) {
  const { filter, selectFilter, categoryFilteredData } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {}, [filter]);
  if (filter.length < 1) return <Error />;

  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-wrap gap-4 mb-10">
          {sortedData.map((element) => {
            for (const i of filter[0].options) {
              if (i.checked && i.value === element.category) {
                if (selectedBrand === "") {
                  return <Card key={element.id} data={element} />;
                } else if (selectedBrand === element.brand) {
                  return <Card key={element.id} data={element} />;
                }
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
