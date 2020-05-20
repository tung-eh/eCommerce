import { Router } from "@reach/router";
import React from "react";

import Admin from "./Admin";
import AuthProvider from "./AuthProvider";
import User from "./User";

const App = () => (
  <AuthProvider>
    <Router>
      <User path="*" />
      <Admin path="admin/*" />
    </Router>
  </AuthProvider>
);

export default App;
