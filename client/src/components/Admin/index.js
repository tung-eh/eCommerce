import { Router } from "@reach/router";
import React from "react";

import Categories from "./Categories";
import Navigator from "./Navigator";

const Layout = ({ children }) => (
  <>
    <Navigator width={250} />
    <main style={{ marginLeft: 250, padding: 10 }}>{children}</main>
  </>
);

const Dashboard = () => "Dashboard";
const Products = () => "Products";

const Admin = () => (
  <Layout>
    <Router>
      <Dashboard path="/" />
      <Categories path="/categories" />
      <Products path="/products" />
    </Router>
  </Layout>
);

export default Admin;
