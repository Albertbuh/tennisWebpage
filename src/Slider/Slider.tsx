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

function Header(props: { text: string }) {
  return (
    <>
      <div className="slider-header">
        <h1> {props.text} </h1>
        <div className="buttons">
          <button>&#8612;</button>
          <button>&#8614;</button>
        </div>
      </div>
    </>
  );
}
interface SliderProps {
  header: string;
}

function Slider(props: SliderProps) {
  return (
    <>
      <section className="slider">
        <Header text={props.header} />
        <div className="content">
          {
            trainerList.map(trainer => (
              <TrainerItem 
                key={trainer.id}
                image={trainer.imageUrl}
                name={trainer.name}
                desc={trainer.desc}
              />
            ))
          }
        </div>
      </section>
    </>
  );
}

const trainerList = [
  {
    id: "pulvinar",
    imageUrl: trainer1,
    name: "Pulvinar aliquam",
    desc: "Arcu elit massa amet turpis vel consequat pelllentesque sit.",
  },
  {
    id: "pretium",
    imageUrl: trainer2,
    name: "Pretium odio",
    desc: "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
  },
  {
    id: "aliquet",
    imageUrl: trainer3,
    name: "Aliquet consectetur",
    desc: "Id sapien sed nibh fermentum massa posuere ipsum. Diam in.",
  },
  {
    id: "blandit",
    imageUrl: trainer4,
    name: "Blandit augue",
    desc: "Scelerisque accumsan pretium justo, vitae eli. Dolor semper morbi sit auctor vel diam eros.",
  },
  {
    id: "lorem",
    imageUrl: trainer5,
    name: "Lorem lacus",
    desc: "Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venatis faucibus.",
  },
  {
    id: "sed",
    imageUrl: trainer6,
    name: "sed erat",
    desc: "Quis ullamcorper pretium lacus risus tellus dolor etiam.",
  },
];

export default Slider;
