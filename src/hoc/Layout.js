import React from 'react';
import './Layout.css';
import MenuAppBar from '../container/MenuAppBar';

const Layout = props => (
  <div className="wrap">
    <MenuAppBar />
    <div>{props.children}</div>
  </div>
);

export default Layout;
