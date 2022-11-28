import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "../redux/features/cartSlice";
export default function Card({ data }) {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.cart);
  const addItemToCart = () => {
    dispatch(addItem(data));
    dispatch(toggleCart());
  };
  const {
    title,
    price,
    id,
    discountPercentage,
    brand,
    rating,
    thumbnail,
    description,
  } = data;
  return (
    <div className="w-[340px] min-h-[450px] flex flex-col  rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-4  card-image" src={thumbnail} alt="product image" />
      </a>
      <div className="px-5 pb-5 h-full flex flex-col justify-between ">
        <div>
          <a href="#">
            <h5 className="text-xl font-semibold text-left tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <h5 className="text-sm mt-2 font-semibold text-left tracking-tight text-gray-900 truncate dark:text-white">
              {description}
            </h5>
          </a>
          <div className="flex items-center mt-4 mb-5">
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${
                rating >= 1 ? "text-yellow-300" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${
                rating >= 2 ? "text-yellow-300" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${
                rating >= 3 ? "text-yellow-300" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${
                rating >= 4 ? "text-yellow-300" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${
                rating >= 5 ? "text-yellow-300" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between relative">
          <div className="flex justify-between items-center">
            <div className="flex justify-between flex-col items-center">
              <span className="text-1xl text-gray-900 dark:text-yellow-300 ">
                {discountPercentage}%
              </span>
              <span className="text-1xl text-gray-900 dark:text-white  line-through">
                ${price}
              </span>
            </div>
            <span className="text-3xl ml-2 font-bold text-gray-900 dark:text-white ">
              ${((price % discountPercentage) * 100).toFixed(0)}
            </span>
          </div>
          <button
            onClick={() => addItemToCart()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
