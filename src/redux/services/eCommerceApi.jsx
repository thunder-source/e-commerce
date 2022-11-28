import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eCommerceApi = createApi({
  reducerPath: "eCommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products?limit=100" }),
  }),
});

export const { useGetProductsQuery } = eCommerceApi;
