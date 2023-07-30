
import '../../styles/textSection.css';
//@ts-ignore
import { ReactNode } from 'react';

interface Props {
  image: string,
  children: ReactNode
}
export default function TextMessage(props: Props) {
  return (
    <>
      <div className="text-container">
        <img src={props.image} alt="" />
        {props.children}
      </div>
      
    </>
  )
}