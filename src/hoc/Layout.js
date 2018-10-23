import React from "react";

import AppBar from "../container/AppBar";

const Layout = props => (
  <div>
    <AppBar />
    <div className="">{props.children}</div>
  </div>
);

export default Layout;
