import * as React from "react";
import "./styles.css";

import Header from "../components/header";

// markup
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
