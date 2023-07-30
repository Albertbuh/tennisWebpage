import "../../styles/first.css";
import { imageImports } from "src/importImages";

import LinkItem from "./LinkItem";
import VideoButton from "./VideoButton";

function FirstSection() {
  const style = {};

  return (
    <>
      <section className="first-container" style={style}>
        <h1 className="tennis-header">
          Петербургский 
          <span>
            <br></br> теннисный клуб
          </span>
          <span>
            <br></br> имени М.А. Пасечникова
          </span>{" "}
        </h1>
        <VideoButton
          className="video-button"
          label="Посмотрите видео о нашем клубе"
        />
        <div className="section-footer">
          <LinkItem subheader="Услуги" subject="Аренда корта" icon={imageImports.get("link")} />
          <LinkItem subheader="Услуги" subject="Детский теннис" icon={imageImports.get("link")}/>
          <LinkItem subheader="Услуги" subject="Сборы команд" icon={imageImports.get("link")} />
          <LinkItem subheader="Турниры" subject="Расписание" icon={imageImports.get("link")} />
        </div>
      </section>
    </>
  );
}

export default FirstSection;
