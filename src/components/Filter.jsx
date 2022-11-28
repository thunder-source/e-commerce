import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useGetProductsQuery } from "../redux/services/eCommerceApi";
import Loader from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilter,
  UpdateSelectFilter,
} from "../redux/features/filterSlice";
import Card from "./Card";
import Card_categories from "./Card_categories";

const sortOptions = [
  { name: "Best Rating", method: "rating", current: false },
  { name: "Discount", method: "discountPercentage", current: false },
  {
    name: "Price: Low to High",
    method: "priceIncrease",
    current: false,
  },
  {
    name: "Price: High to Low",
    method: "priceDecrease",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter() {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetProductsQuery();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { filter, selectFilter, categoryFilteredData } = useSelector(
    (state) => state.filter
  );
  const [selectedBrand, setSelectedBrand] = useState("");
  console.log(selectedBrand);
  const [sortData, setSortData] = useState(
    JSON.parse(JSON.stringify(data.products))
  );
  const [changeInFilter, setChangeInFilter] = useState(false);

  const sortMethod = (option) => {
    sortOptions.map((ele, index) => {
      setChangeInFilter(!changeInFilter);
      if (option.name === ele.name) {
        if (sortOptions[index].current) {
          sortOptions[index].current = false;
          setSortData((prev) => {
            return prev.sort((a, b) => a.id - b.id);
          });
        } else {
          sortOptions[index].current = true;

          switch (sortOptions[index].method) {
            case "priceIncrease":
              setSortData((prev) => {
                return prev.sort(function (a, b) {
                  return (
                    parseInt(
                      (
                        a.price -
                        (a.price * a.discountPercentage) / 100
                      ).toFixed(0)
                    ) -
                    parseInt(
                      (
                        b.price -
                        (b.price * b.discountPercentage) / 100
                      ).toFixed(0)
                    )
                  );
                });
              });
              break;
            case "discountPercentage":
              setSortData((prev) => {
                return prev.sort(function (a, b) {
                  return b.discountPercentage - a.discountPercentage;
                });
              });
              break;
            case "rating":
              setSortData((prev) => {
                return prev.sort(function (a, b) {
                  return b.rating - a.rating;
                });
              });
              break;
            case "priceDecrease":
              setSortData((prev) => {
                return prev.sort(function (a, b) {
                  return (
                    parseInt(
                      (
                        b.price -
                        (b.price * b.discountPercentage) / 100
                      ).toFixed(0)
                    ) -
                    parseInt(
                      (
                        a.price -
                        (a.price * a.discountPercentage) / 100
                      ).toFixed(0)
                    )
                  );
                });
              });
              break;

            default:
              setSortData((prev) => {
                return prev.sort();
              });
              break;
          }

          // if (sortOptions[index].method === "priceIncrease") {

          // }
        }
      } else {
        sortOptions[index].current = false;
      }
    });
  };
  useEffect(() => {}, [changeInFilter]);

  if (isFetching) return <Loader title="Loading Products..." />;
  if (error) return <Error />;

  return (
    <div className="bg-white w-full">
      <div>
        <main className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              onClick={(e) => sortMethod(option)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filter.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onClick={() => {
                                    dispatch(updateFilter(option));
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="font-medium  my-3 text-gray-900">Brand</div>
                <select
                  onChange={(e) => {
                    dispatch(UpdateSelectFilter(e.target.value));
                    setSelectedBrand(e.target.value);
                  }}
                  className="px-4 py-3 w-full rounded-md  bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                >
                  <option value={""}>Select Brand</option>
                  {selectFilter.map((element) => (
                    <option
                      key={element.value}
                      value={element.value}
                      className="capitalize"
                    >
                      {element.value}
                    </option>
                  ))}
                </select>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* <div className="w-full">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex flex-wrap gap-4 mb-10">
                     
                        console.log(filter[0].options);
                        for (const i of filter[0]?.options || []) {
                          if (i.checked === i.value) {
                            return sortData.map((element) => {
                              // filter[0].options.map((ele) => console.log(ele));
                              return <Card key={element.id} data={element} />;
                            });
                          }
                        }
                      } 

                    </div>
                  </div>
                </div>  */}
                <Card_categories
                  selectedBrand={selectedBrand}
                  sortedData={sortData}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// 1: Create a User Interface for the product listing page. ✅
// 2: Products should be listed separated by category.✅
// 3: Users should be able to filter products by  category.✅    -------------- brand,
// 4: Users should be able to sort products by rating, discount and price.
// 5: If the user tries to buy a product where the stock is less than 50 numbers, prompt a message "hurry! only a few items left".✅
// 6: The UI should have 'add to cart functionality.✅
