import "../styles/slider.css";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ITrainer } from "./SliderItem";

interface headerProps {
  text: string;
  onNext: (ev: React.PointerEvent<HTMLButtonElement>) => void;
  onPrev: (ev: React.PointerEvent<HTMLButtonElement>) => void;
}
function Header(props: headerProps) {
  return (
    <>
      <div className="slider-header">
        <h1> {props.text} </h1>
        <div className="buttons">
          <button onClick={props.onPrev}>&larr;</button>
          <button onClick={props.onNext}>&rarr;</button>
        </div>
      </div>
    </>
  );
}

type SliderAvailableTypes = ITrainer | any;

interface SliderProps {
  header: string;
  collection: Array<SliderAvailableTypes>;
  setCollection: Dispatch<SetStateAction<Array<SliderAvailableTypes>>>;
  children?: ReactNode;
  style?: React.CSSProperties;
}

function Slider(props: SliderProps) {
  const list = [...props.collection];
  function handlerPrev() {
    props.setCollection([...list.slice(1), list[0]]);
  }
  function handlerNext() {
    const length = list.length;
    props.setCollection([list[length - 1], ...list.slice(0, length - 1)]);
  }

  return (
    <>
      <section className="slider" style={props.style}>
        <Header text={props.header} onNext={handlerNext} onPrev={handlerPrev} />
        <div className="content">{props.children}</div>
      </section>
    </>
  );
}

export default Slider;
