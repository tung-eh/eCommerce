import React, { useEffect } from "react";

import { useFetch } from "../../../hooks";

const Sample = () => {
  const { data: categories, triggerFetch: fetchCategories } = useFetch({
    url: "/api/categories",
  });
  const { data: products, triggerFetch: fetchProducts } = useFetch({
    url: "/api/products",
  });
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

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
