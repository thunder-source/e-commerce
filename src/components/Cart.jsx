import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  toggleCart,
} from "../redux/features/cartSlice";
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Cart() {
  const dispatch = useDispatch();
  const { showCart, cart, totalAmount } = useSelector((state) => state.cart);

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(toggleCart())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-900 text-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium  ">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => dispatch(toggleCart())}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden  rounded-md border border-gray-200">
                                  <img
                                    src={product.thumbnail}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium ">
                                      <h3>
                                        <a>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">
                                        $
                                        {(
                                          (product.price %
                                            product.discountPercentage) *
                                          100
                                        ).toFixed(0) * product.quantity}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {product.brand}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className=" flex justify-center items-center gap-4">
                                      <p className="text-gray-100 text-lg">
                                        Qty
                                      </p>
                                      <div
                                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                        aria-label="Pagination"
                                      >
                                        <button
                                          onClick={() =>
                                            dispatch(
                                              decreaseQuantity(product.id)
                                            )
                                          }
                                          className="relative inline-flex items-center rounded-l-md border border-gray-300  px-2 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:z-20"
                                        >
                                          <span className="sr-only bg-white text-white">
                                            Previous
                                          </span>
                                          <RemoveIcon />
                                        </button>
                                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                        <a
                                          href="#"
                                          aria-current="page"
                                          className="relative z-10 inline-flex items-center border border-indigo-300  px-4 py-2 text-sm font-medium text-indigo-300 focus:z-20"
                                        >
                                          {product.quantity}
                                        </a>
                                        <button
                                          onClick={() =>
                                            dispatch(
                                              increaseQuantity(product.id)
                                            )
                                          }
                                          className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray px-2 py-2 text-sm font-medium text-white hover:bg-zinc-800  focus:z-20"
                                        >
                                          <span className="sr-only">Next</span>
                                          <AddIcon />
                                        </button>
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          dispatch(removeItem(product))
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium ">
                        <p>Subtotal</p>
                        <p>${totalAmount}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-300">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-300">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => dispatch(toggleCart())}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
