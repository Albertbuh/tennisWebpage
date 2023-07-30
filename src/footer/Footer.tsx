import LinkButton from "src/linkButton/LinkButton"
//@ts-ignore
import youtubeIcon from "../assets/youtubePurple.png";
//@ts-ignore
import vkIcon from "../assets/vkPurple.png";
//@ts-ignore 
import telegramIcon from "../assets/telegramPurple.png";

import '../styles/footer.css';

export default function Footer() {
  return(
    <>
    <section className="footer-section">
      <div className="left-section">
        <p>2023 &copy; Все права защищены.</p>
      </div>
      <div className="middle-section">
        <LinkButton href="#"> Главная </LinkButton>
        <LinkButton href="#"> О клубе</LinkButton>
        <LinkButton href="#"> Турниры </LinkButton>
        <LinkButton href="#"> Услуги </LinkButton>
        <LinkButton href="#"> Детский теннис </LinkButton>
        <LinkButton href="#"> Галерея </LinkButton>
        <LinkButton href="#"> Цены </LinkButton>
        <LinkButton href="#"> Контакты </LinkButton>
      </div>
      <div className="right-section">
        <img src={youtubeIcon} alt="" />
        <img src={vkIcon} alt="" />
        <img src={telegramIcon} alt="" />
      </div>
    </section>
    </>
  )
}