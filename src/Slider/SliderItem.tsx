import { ReactNode } from "react";
import '../styles/trainerItem.css';

export default function SliderItem(props: { children: ReactNode }) {
  return <>{props.children}</>;
}

export interface ISliderItem {
  id: number;
  imageUrl: string;
  desc: string;
}

export interface ITrainer extends ISliderItem {
  name: string;
  // imageUrl: string;
  // id: number
  // desc: string;
}


interface TrainerProps {
  imageUrl: string;
  name: string;
  desc: string;
}
export function TrainerItem(props: TrainerProps) {
  return (
    <>
      <div className="trainer-item">
        <div className="img-wrap"><img src={props.imageUrl} alt="no img" /></div>
        <p className="name">{props.name}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </>
  );
}

export function TrainerSliderContent(list: Array<ITrainer>) {
  return (
    <>
      {
        list.map(trainer => (
          <TrainerItem 
            key={trainer.id}
            imageUrl={trainer.imageUrl}
            name={trainer.name}
            desc={trainer.desc}
          />
        ))
      }
    </>
  )
}
