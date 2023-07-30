import Slider from "src/Slider/Slider";
//@ts-ignore
import cafe from "../assets/cafe.png";
//@ts-ignore
import pool from "../assets/pool.png";
//@ts-ignore
import gym from "../assets/gym.png";

import { useState } from "react";
import "../styles/lastSection.css";

export default function LastSection() {
  const [facilities, setFacility] = useState(images);
  return (
    <>
      <div className="last-section-container">
        <Prices/>
        <Slider
          style={{ padding: "0" }}
          header="Услуги"
          collection={facilities}
          setCollection={setFacility}
        >
          <Facility image={facilities[0].image} text={facilities[0].text} />
        </Slider>
      </div>
    </>
  );
}

function Prices() {
  return (
    <div className="prices-container">
      <h1>Цены и абонементы </h1>
      <div className="prices">
        <Price text="Зимний сезон 2021-2022" />
        <Price text="Абонементы" />
        <Price text="Скидки" />
        <Price text="Дополнительные услуги" />
      </div>
    </div>
  );
}

function Price(props: {text:string}) {
  return (
    <div className="price"> <span>{props.text}</span> <span className="arrow">&larr;</span></div>
  )
}

const images = [
  {
    id: 0,
    image: cafe,
    text: "Уютное кафе",
  },
  {
    id: 1,
    image: pool,
    text: "Бассейн",
  },
  {
    id: 2,
    image: gym,
    text: "Тренажерный зал",
  },
];
function Facility(props: { image: string; text: string }) {
  return (
    <div className="facility">
      <img src={props.image} alt="" />
      <div className="overlay"></div>
      <p>{props.text}</p>
    </div>
  );
}
