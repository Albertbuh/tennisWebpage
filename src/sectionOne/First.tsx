//@ts-ignore
import "../styles/first.css";
//@ts-ignore
import linkIcon from "../assets/linkIcon.png";

import LinkItem from "./LinkItem";
import VideoButton from "./VideoButton";

function FirstSection() {
  const style = {};

  return (
    <>
      <section className="first-container" style={style}>
        <h1 className="tennis-header">
          {" "}
          Петербургский теннисный клуб{" "}
          <span>
            <br></br> имени М.А. Пасечникова{" "}
          </span>{" "}
        </h1>
        <VideoButton
          className="video-button"
          label="Посмотрите видео о нашем клубе"
        />
        <div className="section-footer">
          <LinkItem subheader="Услуги" subject="Аренда корта" icon={linkIcon} />
          <LinkItem subheader="Услуги" subject="Детский теннис" icon={linkIcon}/>
          <LinkItem subheader="Услуги" subject="Сборы команд" icon={linkIcon} />
          <LinkItem subheader="Турниры" subject="Расписание" icon={linkIcon} />
        </div>
      </section>
    </>
  );
}

export default FirstSection;
