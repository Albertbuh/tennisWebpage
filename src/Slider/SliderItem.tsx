import { ReactNode } from "react";
import '../styles/trainerItem.css';

export default function SliderItem(props: { children: ReactNode }) {
  return <>{props.children}</>;
}

interface TrainerProps {
  image: string;
  name: string;
  desc: string;
}
export function TrainerItem(props: TrainerProps) {
  return (
    <>
      <div className="trainer-item">
        <div className="img-wrap"><img src={props.image} alt="no img" /></div>
        <p className="name">{props.name}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </>
  );
}
