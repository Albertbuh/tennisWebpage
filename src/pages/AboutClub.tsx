import Background from "src/Background";
import { imageImports } from "src/importImages";

import "../styles/about_club/aboutClub.css";
import Slider from "src/Slider/Slider";
import { ISliderItem } from "src/Slider/SliderItem";
import { useState } from "react";
import Facility from "src/Facility";
import TextMessage from "src/main/sectionText/TextSection";
import Footer from "src/footer/Footer";

export default function About() {
  const [corts, setCorts] = useState(cortImages);
  return (
    <>
      <section className="about">
        <Background image={imageImports.get("backgroundAbout")} height={250} />
        <h1 className="about-header"> О клубе </h1>
        <Slider
          header={"Фото кортов"}
          collection={corts}
          setCollection={setCorts}
        >
          <Facility image={corts[0].imageUrl} text={corts[0].desc} />
        </Slider>
        <h1
          style={{ paddingRight: "75%", margin: "50px 0px", fontSize: "32px" }}
        >
          {" "}
          О клубе{" "}
        </h1>
        <TextMessage
          image={imageImports.get("tournament")}
          className="about-message"
        >
          <h1> Петербургский теннисный клуб имени М.А. Пасечникова</h1>
          <p>
            {" "}
            Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur
            scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices
            risus viverra. Purus volutpat phasellus viverra vestibulum quis.
            Gravida pretium odio enim ut id tempus semper. Urna cum at in
            iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi
            faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis
            dolor id. Maecenas vivamus tristique donec neque id convallis.
            Feugiat fusce at est at.
          </p>
          <p>
            {" "}
            Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere
            sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper
            pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut
            lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius
            in eu venenatis.
          </p>
          <p>
            Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget
            urna magna interdum feugiat ut. In purus thoncus egestas euismod
            morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis.
            Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum
            suscipit pellentesque risus non.
          </p>
          <div className="accent-text">
            <TextElement number="7" subject="Летних грунтовых кортов"/>
            <TextElement number="4" subject={"Зимних корта с покрытием \"искусственная трава\""}/>
            <TextElement number="3" subject={"Зимних корта с покрытием \"hard\""}/>
          </div>
        </TextMessage>
        <Footer />
      </section>
    </>
  );
}

function TextElement(props: {number?: number|string, subject?: string}) {
  return (
            <div className="accent-elem">
              <span className="number">{props.number}</span>
              <span>{props.subject}</span>
            </div>
  );
}

const cortImages: ISliderItem[] = [
  {
    id: 0,
    imageUrl: imageImports.get("summer_cort") as string,
    desc: "Летний корт",
  },
  {
    id: 1,
    imageUrl: imageImports.get("grunt_cort") as string,
    desc: "Грунтовый корт",
  },
  {
    id: 2,
    imageUrl: imageImports.get("blue_cort") as string,
    desc: "Резиновый корт",
  },
];
