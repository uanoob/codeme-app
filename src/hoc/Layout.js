import React from "react";

import MenuAppBar from "../container/MenuAppBar";

const Layout = props => (
  <div>
    <MenuAppBar />
    <div className="">{props.children}</div>
  </div>
);

export default Layout;
