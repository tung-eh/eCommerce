import React from 'react';

import {Table} from '../../../atoms';

const COLUMNS = [
  {name: 'Name', accessor: 'name'},
  {name: 'Product count', accessor: 'productCount'},
  {name: 'Status', accessor: 'status', render: value => <b>{value}</b>},
];

const mockData = [
  {name: 'Tung', productCount: 1, status: 'Active'},
  {name: 'Teng', productCount: 10, status: 'Disabled'},
];

const Categories = () => (
  <>
    <h2>Categories</h2>
    <Table columns={COLUMNS} data={mockData} />
  </>
);

export default Categories;
