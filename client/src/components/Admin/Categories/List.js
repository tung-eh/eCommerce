import { navigate } from "@reach/router";
import React from "react";
import styled from "styled-components";

import { Button, Table } from "../../../atoms";
import { useFetchOnMount } from "../../../hooks/useFetch";

const COLUMNS = [
  { name: "Name", accessor: "name" },
  { name: "Product count", accessor: "productCount" },
  { name: "Status", accessor: "status", render: (value) => <b>{value}</b> },
];

const mockData = [
  { name: "Tung", productCount: 1, status: "Active" },
  { name: "Teng", productCount: 10, status: "Disabled" },
];

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = () => {
  const { data } = useFetchOnMount("/api/categories");
  console.log({ data });

  return (
    <>
      <Header>
        <h2>Categories</h2>
        <Button onClick={() => navigate("/admin/categories/new")}>
          + New category
        </Button>
      </Header>
      <Table columns={COLUMNS} data={mockData} />
    </>
  );
};

export default List;
