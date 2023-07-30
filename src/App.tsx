//import Header from './Header/Header';
import "./styles/styles.css";
import Header from "./header/Header";
import FirstSection from "./sectionOne/First";
import CardContainer from "./card/CardContainer";
import TextMessage from "./sectionText/TextSection";
import Slider from "./Slider/Slider";
//@ts-ignore TS wouldn't like to read .png format T_T
import background from "./assets/background.png";
//@ts-ignore
import jumpBoyImage from "./assets/jumpBoy.png";

import { useRef, useEffect, useState } from "react";

function App() {
  return (
    <>
      <div className="first-wrap">
        <Background image={background} />
        <Header />
        <FirstSection />
      </div>
      <CardContainer />
      <TextMessage image={jumpBoyImage}>
        <h1> Спортивный клуб </h1>
        <em>
          Imperdiet lorem ipsum, pulvinar aliquer sit ultricies in sit turpis.
          Ultricies erat pretium risus quam tincidunt non viverra porttitor.
          Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet
          aliquer ultrices mauris pellentesque. Non ipsum commodo, sit mi switch
          netus aenenan nisl. ]Donec sit pellentesque enim, vestibulum
          <br></br>
          <br></br>
          Condimentum hac adipiscing purus in augue nisi Convaliss ut nisi.
        </em>
        <h3> Ornare orci ut dictum nulla fames.</h3>
        <ul>
          <li>
            Euismod diam, vel venenatis bibendum sodales sem henderit vulputate
            sagittis
          </li>
          <li>
            {" "}
            Nisl senectus sed malesuada donec. Interdum malesuada bibendum
            imperdiet elementum auctor vitae in.
          </li>
          <li>
            {" "}
            Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin
            urna, sagitts.
          </li>
          <li>
            {" "}
            Sceleresque urna senectus commodo, nam. Donec nibh tempus imperdiet
            nisi, tincidunt mus egestas nisl nullam.
          </li>
        </ul>
      </TextMessage>
      <Slider header="Тренерский состав"/>

    </>
  );
}

function Background(props: { image: string }) {
  const imageRef = useRef(null);
  const [imageHeight, setHeight] = useState(0);
  useEffect(() => {
    //@ts-ignore
    setHeight(imageRef?.current?.clientHeight);
    console.log(
      //@ts-ignore
      `First background image height: ${imageRef?.current?.clientHeight}`
    );
  });

  return (
    <>
      <img src={props.image} ref={imageRef} className="background" />
      <div
        className="background overlay"
        style={{
          height: imageHeight,
          backgroundColor: "var(--overlay-color)",
        }}
      ></div>
    </>
  );
}

export default App;
