import Slider from "src/Slider/Slider";


import { useState } from "react";
import "../../styles/lastSection.css";
import { ISliderItem } from "src/Slider/SliderItem";
import { imageImports } from "src/importImages";

export default function LastSection() {
  const [facilities, setFacility] = useState(imagesList);
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
          <Facility image={facilities[0].imageUrl} text={facilities[0].desc} />
        </Slider>
      </div>
    </>
  );
}

const imagesList : ISliderItem[] = [
  {
    id: 0,
    imageUrl: imageImports.get("cafe") as string,
    desc: "Уютное кафе",
  },
  {
    id: 1,
    imageUrl: imageImports.get("pool") as string,
    desc: "Бассейн",
  },
  {
    id: 2,
    imageUrl: imageImports.get("gym") as string,
    desc: "Тренажерный зал",
  },
];

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


function Facility(props: { image: string; text: string }) {
  return (
    <div className="facility">
      <img src={props.image} alt="" />
      <div className="overlay"></div>
      <p>{props.text}</p>
    </div>
  );
}
