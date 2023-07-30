import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Background from "./Background";

function Layout(props: {image:string, height: string | number}) {
  return (
    <>
        <Background image={props.image} height={props.height} />
        <Header/>
      
      <Outlet />
    </>
  );
}

export default Layout;