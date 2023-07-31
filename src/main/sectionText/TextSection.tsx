
import '../../styles/textSection.css';
//@ts-ignore
import { ReactNode } from 'react';

interface Props {
  image: string,
  children: ReactNode,
  style?: React.CSSProperties,
  className?: string,
}
export default function TextMessage(props: Props) {
  return (
    <>
      <div className={"text-container " + props.className}>
        <img src={props.image} alt="" />
        {props.children}
      </div>
      
    </>
  )
}