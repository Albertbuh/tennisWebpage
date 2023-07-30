import "../styles/header.css";
//@ts-ignore
import mainIcon from "../assets/mainIcon.png";
//@ts-ignore
import youtubeIcon from "../assets/youtubeLogo.png";
//@ts-ignore
import vkIcon from "../assets/vkLogo.png";

import LinkButton from "src/linkButton/LinkButton";
export default function Header() {
  return (
    <>
      <section className="header-section">
        <div className="left-section">
          <img src={mainIcon} alt="" />
        </div>
        <div className="middle-section">
          {
            links.map((link, index) => (
              <LinkButton href={link.href} key={index}> {link.text} </LinkButton>
            ))
          }
        </div>
        <div className="right-section">
          <img src={youtubeIcon} alt="" />
          <img src={vkIcon} alt="" />
        </div>
      </section>
    </>
  );
}

const links = [
  {
    href: "#",
    text: "Главная"
  },
  {
    href: "#",
    text: "О клубе"
  },
  {
    href: "#",
    text: "Тренеры"
  },
  {
    href: "#",
    text: "Услуги"
  },
  {
    href: "#",
    text: "Детский теннис"
  },
  {
    href: "#",
    text: "Галерея"
  },
  {
    href: "#",
    text: "Цены"
  },
  {
    href: "#",
    text: "Контакты"
  },
]


