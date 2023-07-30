import "../styles/slider.css";
import { TrainerItem } from "./SliderItem";
//@ts-ignore
import trainer1 from "../assets/trainer1.png";
//@ts-ignore
import trainer2 from "../assets/trainer2.png";
//@ts-ignore
import trainer3 from "../assets/trainer3.png";
//@ts-ignore
import trainer4 from "../assets/trainer4.png";
//@ts-ignore
import trainer5 from "../assets/trainer5.png";
//@ts-ignore
import trainer6 from "../assets/trainer6.png";
import { useState } from "react";

interface headerProps {
  text: string,
  onNext: (ev: React.PointerEvent<HTMLButtonElement>) => void,
  onPrev: (ev: React.PointerEvent<HTMLButtonElement>) => void
}
function Header(props: headerProps) {
  return (
    <>
      <div className="slider-header">
        <h1> {props.text} </h1>
        <div className="buttons">
          <button onClick={props.onPrev}>&#8612;</button>
          <button onClick={props.onNext}>&#8614;</button>
        </div>
      </div>
    </>
  );
}
interface SliderProps {
  header: string;
  maxElements?: number
}

function Slider(props: SliderProps) {
  const [list, setList] = useState(trainerList);
  function handlerPrev() {
    setList([
      ...list.slice(1),
      list[0]
    ])   
  }
  function handlerNext() {
    const length = list.length;
    setList([
      list[length-1],
      ...list.slice(0, length-1)
    ])
  }
  
  return (
    <>
      <section className="slider">
        <Header text={props.header} onNext={handlerNext} onPrev={handlerPrev}/>
        <div className="content">
          {
            list.map(trainer => {
              
              return (
              <TrainerItem 
                key={trainer.id}
                image={trainer.imageUrl}
                name={trainer.name}
                desc={trainer.desc}
              />
            )})
          }
        </div>
      </section>
    </>
  );
}


const trainerList = [
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
  
];

export default Slider;
