import React from "react";

import { useFetchOnMount } from "../../../hooks/useFetch";

const Sample = () => {
  const { data: categories } = useFetchOnMount("/api/categories");
  const { data: products } = useFetchOnMount("/api/products");

  return (
    <>
      <div>Hello world!</div>
      {categories && products ? (
        <div>
          We have {categories.length} categories and {products.length} products
          in our database
        </div>
      ) : (
        <div>Fetching data ....</div>
      )}
    </>
  );
};

export default Sample;
