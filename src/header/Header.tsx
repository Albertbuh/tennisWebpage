import "../styles/header.css";
//@ts-ignore
import mainIcon from "../assets/mainIcon.png";
//@ts-ignore
import youtubeIcon from "../assets/youtubeLogo.png";
//@ts-ignore
import vkIcon from "../assets/vkLogo.png";

import Navbar from "src/Navbar";

export default function Header() {
  return (
    <>
      <section className="header-section">
        <div className="left-section">
          <img src={mainIcon} alt="" />
        </div>
        <Navbar/>
        <div className="right-section">
          <img src={youtubeIcon} alt="" />
          <img src={vkIcon} alt="" />
        </div>
      </section>
    </>
  );
}



