import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import { imageImports } from "./importImages";
import Background from "./Background";
import FirstSection from "./main/sectionOne/First";

function Layout() {
  return (
    <>
      <div className="first-wrap">
        <Background image={imageImports.get("background")} />
        <Header />
        <FirstSection />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;