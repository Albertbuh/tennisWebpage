//@ts-ignore
import youtubeIcon from "../assets/youtubePurple.png";
//@ts-ignore
import vkIcon from "../assets/vkPurple.png";
//@ts-ignore 
import telegramIcon from "../assets/telegramPurple.png";

import '../styles/footer.css';
import Navbar from "src/Navbar";

export default function Footer() {
  return(
    <>
    <section className="footer-section">
      <div className="left-section">
        <p>2023 &copy; Все права защищены.</p>
      </div>
      <Navbar />
      <div className="right-section">
        <img src={youtubeIcon} alt="" />
        <img src={vkIcon} alt="" />
        <img src={telegramIcon} alt="" />
      </div>
    </section>
    </>
  )
}