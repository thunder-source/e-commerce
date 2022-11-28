import "./App.css";
import First_nav_bar from "./components/headers/First_nav_bar";
import Second_nav_bar from "./components/headers/Second_nav_bar";
import Third_nav_bar from "./components/headers/Third_nav_bar";
import Main_carousel from "./components/Main_carousel";
import Second_Last_footer from "./components/footers/Second_Last_footer";
import Last_footer from "./components/footers/Last_footer";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import { useGetProductsQuery } from "./redux/services/eCommerceApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addCategoryFilteredData,
  addFilter,
  addSelectFilter,
} from "./redux/features/filterSlice";

function App() {
  const { data, isFetching, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  // this add the category and brand name to the store
  useEffect(() => {
    const categoryMap = new Map();
    const brandMap = new Map();
    const brandOptions = [];
    let categoryData = [];
    let brandData = [];
    const filters = [
      {
        id: "category",
        name: "Category",
        options: [],
      },
    ];
    if (data) {
      data.products.map((ele) => {
        if (categoryMap.has(ele.category)) {
          let element = categoryMap.get(ele.category);
          element.push(ele);
          categoryMap.set(ele.category, element);
        } else {
          categoryMap.set(ele.category, [ele]);
        }
      });

      data.products.map((ele) => {
        if (brandMap.has(ele.brand)) {
          let element = brandMap.get(ele.brand);
          element.push(ele);
          brandMap.set(ele.brand, element);
        } else {
          brandMap.set(ele.brand, [ele]);
        }
      });
      for (const entry of categoryMap) {
        categoryData.push(entry);
      }
      for (const entry of brandMap) {
        brandData.push(entry);
      }
      //push brand data
      categoryData.map((category, index) => {
        filters[0].options.push({
          value: category[0],
          label: category[0],
          checked: true,
        });
      });

      brandData.map((brand) => {
        brandOptions.push({
          value: brand[0],
          category: brand[1][0].category,
          checked: false,
        });
      });
      dispatch(addFilter(filters));
      dispatch(addSelectFilter(brandOptions));
      dispatch(addCategoryFilteredData(categoryData));
    }
  }, [isFetching]);

  return (
    <div className="App_container bg-black">
      <First_nav_bar />
      <Second_nav_bar />
      <Third_nav_bar />
      <Main_carousel />
      <Filter />
      <Second_Last_footer />
      <Last_footer />
      <Cart />
    </div>
  );
}

export default App;
