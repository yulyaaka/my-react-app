/*import React from "react";

export const Layout: React.FC = () => (
    return <>
     <header>Header.tsx</header>
     <main>Main.tsx</main>
     <footer>Footer.tsx</footer>
    </>
)*/

import React from "react"
import {Footer} from "./Footer"
import {Header} from "./Header"
import {Main} from "./Main"

export const Layout = (): React.ReactElement => {
    return <>
      <Header/>
      <Main/>
      <Footer/>
    </>
}