/*import React from "react";

export const Layout: React.FC = () => (
    return <>
     <header>Header.tsx</header>
     <main>Main.tsx</main>
     <footer>Footer.tsx</footer>
    </>
)*/



/*
import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main />
      <main>{children}</main>
      <Footer />
    </>
  );
};
*/
/*
import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};
*/
/*
// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children ?? <Outlet />}</Main>
      <Footer />
    </>
  );
};
*/
// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;