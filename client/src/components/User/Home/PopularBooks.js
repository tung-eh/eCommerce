import React from "react";

import { Grid } from "../../../atoms";
import { ProductCard } from "../../../molecules";
import { useFetchOnMount } from "../../../hooks/useFetch";

const PopularBooks = () => {
  const { data } = useFetchOnMount("/api/products", { mock: true });

  return data ? (
    <Grid>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  ) : (
    "Loading..."
  );
};

export default PopularBooks;
