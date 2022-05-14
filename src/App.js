import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

import "./styles.css";

export default function App() {
  <UserProvider>
    return <Router />;
  </UserProvider>;
}
