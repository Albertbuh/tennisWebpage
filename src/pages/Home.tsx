import { useState } from "react";
import "../styles/styles.css";


import CardContainer from "../card/CardContainer";
import TextMessage from "../main/sectionText/TextSection";
import Slider from "../Slider/Slider";
import Footer from "../footer/Footer";
import LastSection from "../main/lastSection/lastSection";

import { imageImports } from "../importImages";
import { ITrainer, TrainerSliderContent } from "../Slider/SliderItem";
import FirstSection from "src/main/sectionOne/First";
import Background from "src/Background";



function App() {
  const [list, setList] = useState(trainerList);
  return (
    <>
      <Background image={imageImports.get("background")} height={600} />
      <div className="first-wrap">
        <FirstSection />
      </div>
      <CardContainer />
      <TextMessage image={imageImports.get("jumpBoy")}>
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
      <Footer/>
    </>
  );
}



const trainerList: Array<ITrainer> = [
  {
    id: 0,
    imageUrl: imageImports.get("trainer1") as string,
    name: "Pulvinar aliquam",
    desc: "Arcu elit massa amet turpis vel consequat pelllentesque sit.",
  },
  {
    id: 1,
    imageUrl: imageImports.get("trainer2") as string,
    name: "Pretium odio",
    desc: "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
  },
  {
    id: 2,
    imageUrl: imageImports.get("trainer3") as string,
    name: "Aliquet consectetur",
    desc: "Id sapien sed nibh fermentum massa posuere ipsum. Diam in.",
  },
  {
    id: 3,
    imageUrl: imageImports.get("trainer4") as string,
    name: "Blandit augue",
    desc: "Scelerisque accumsan pretium justo, vitae eli. Dolor semper morbi sit auctor vel diam eros.",
  },
  {
    id: 4,
    imageUrl: imageImports.get("trainer5") as string,
    name: "Lorem lacus",
    desc: "Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venatis faucibus.",
  },
  {
    id: 5,
    imageUrl: imageImports.get("trainer6") as string,
    name: "sed erat",
    desc: "Quis ullamcorper pretium lacus risus tellus dolor etiam.",
  },
  {
    id: 6,
    imageUrl: imageImports.get("trainer7") as string,
    name: "Griga napiga",
    desc: "Tule des por tuna ullentopodos marin ke to la.",
  },
];



export default App;
