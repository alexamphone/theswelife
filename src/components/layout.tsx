import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <header></header>
    <main>{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
