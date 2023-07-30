//import Header from './Header/Header';
import "./styles/styles.css";
import Header from "./header/Header";
import FirstSection from "./sectionOne/First";
import CardContainer from "./card/CardContainer";
import TextMessage from "./sectionText/TextSection";
import Slider from "./Slider/Slider";
import Background from './Background';
//@ts-ignore TS wouldn't like to read .png format T_T
import background from "./assets/background.png";
//@ts-ignore
import jumpBoyImage from "./assets/jumpBoy.png";
//@ts-ignore
import trainer1 from "./assets/trainer1.png";
//@ts-ignore
import trainer2 from "./assets/trainer2.png";
//@ts-ignore
import trainer3 from "./assets/trainer3.png";
//@ts-ignore
import trainer4 from "./assets/trainer4.png";
//@ts-ignore
import trainer5 from "./assets/trainer5.png";
//@ts-ignore
import trainer6 from "./assets/trainer6.png";
//@ts-ignore
import trainer7 from "./assets/trainer7.png";
import { ITrainer, TrainerSliderContent } from "./Slider/SliderItem";

import { useState } from "react";
import LastSection from "./lastSection/lastSection";

function App() {
  const [list, setList] = useState(trainerList);
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
      <Slider
        header="Тренерский состав"
        collection={list}
        setCollection={setList}
      >
        {TrainerSliderContent(list)}
      </Slider>
      <LastSection/>
    </>
  );
}

const trainerList: Array<ITrainer> = [
  {
    id: 0,
    imageUrl: trainer1,
    name: "Pulvinar aliquam",
    desc: "Arcu elit massa amet turpis vel consequat pelllentesque sit.",
  },
  {
    id: 1,
    imageUrl: trainer2,
    name: "Pretium odio",
    desc: "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
  },
  {
    id: 2,
    imageUrl: trainer3,
    name: "Aliquet consectetur",
    desc: "Id sapien sed nibh fermentum massa posuere ipsum. Diam in.",
  },
  {
    id: 3,
    imageUrl: trainer4,
    name: "Blandit augue",
    desc: "Scelerisque accumsan pretium justo, vitae eli. Dolor semper morbi sit auctor vel diam eros.",
  },
  {
    id: 4,
    imageUrl: trainer5,
    name: "Lorem lacus",
    desc: "Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venatis faucibus.",
  },
  {
    id: 5,
    imageUrl: trainer6,
    name: "sed erat",
    desc: "Quis ullamcorper pretium lacus risus tellus dolor etiam.",
  },
  {
    id: 6,
    imageUrl: trainer7,
    name: "Griga napiga",
    desc: "Tule des por tuna ullentopodos marin ke to la.",
  },
];



export default App;
