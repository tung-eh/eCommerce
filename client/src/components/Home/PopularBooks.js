import React, {useEffect} from 'react';
import styled from 'styled-components';

import {useFetch} from '../../hooks';
import {Grid} from '../../atoms';
import {ProductCard} from '../../molecules';

const PopularBooks = () => {
  const {data, triggerFetch} = useFetch({url: '/api/products', mock: true});
  useEffect(() => {
    triggerFetch();
  }, []);

  return data ? (
    <Grid>
      {data.map(product => <ProductCard key={product.id} product={product} />)}
    </Grid>
  ) : (
    'Loading...'
  );
};

export default PopularBooks;
