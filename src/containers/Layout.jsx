/* eslint-disable import/no-unresolved */
import React from "react";
import Header from "@components/Header";

import "@styles/containers/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="spacer layer1 min-h-screen bg-neutral-300">
      <Header />
      <div className="px-4">{children}</div>
    </div>
  );
};

export default Layout;
