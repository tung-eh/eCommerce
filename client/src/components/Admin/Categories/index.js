import React from "react";
import { Router } from "@reach/router";

import List from "./List";

const New = () => "new page";

const Categories = () => {
  return (
    <Router>
      <List path="/" />
      <New path="/new" />
    </Router>
  );
};

export default Categories;
