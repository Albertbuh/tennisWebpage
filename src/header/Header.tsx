import { ReactNode } from "react";
import "../styles/header.css";
//@ts-ignore
import mainIcon from "../assets/mainIcon.png";
//@ts-ignore
import youtubeIcon from "../assets/youtubeLogo.png";
//@ts-ignore
import vkIcon from "../assets/vkLogo.png";

export default function Header() {
  return (
    <>
      <section className="header-section">
        <div className="left-section">
          <img src={mainIcon} alt="" />
        </div>
        <div className="middle-section">
          <LinkButton href="#"> Главная </LinkButton>
          <LinkButton href="#"> О клубе </LinkButton>
          <LinkButton href="#"> Тренеры </LinkButton>
          <LinkButton href="#"> Услуги </LinkButton>
          <LinkButton href="#"> Детский теннис </LinkButton>
          <LinkButton href="#"> Галерея </LinkButton>
          <LinkButton href="#"> Цены </LinkButton>
          <LinkButton href="#"> Контакты </LinkButton>
        </div>
        <div className="right-section">
          <img src={youtubeIcon} alt="" />
          <img src={vkIcon} alt="" />
        </div>
      </section>
    </>
  );
}

interface linkProps {
  href: string,
  children: ReactNode
}
function LinkButton(props: linkProps) {
  return <a href={props.href}> {props.children}</a>;
}
