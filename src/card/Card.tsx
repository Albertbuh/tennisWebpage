import { ReactNode } from "react";

interface cardProps {
  url: string,
  children: ReactNode
}
const padding = {
  top: 20,
  right: 18,
  bottom: 24,
  left: 18
}
const overlayColor = "rgb(0,0,0,0.5)";
const imageWidth = 280;
const imageHeight = imageWidth * 4/3;

const containerStyle = {
  display: "inline-block",
  padding: `${padding.top}px ${padding.left}px`,
  margin: "5px",
  width: imageWidth+"px",
  height: "auto",
  overflow: "hidden",
  border: "1px solid rgb(247,236,225)",
  borderRadius: "8px",
  position: "relative",
} as React.CSSProperties;

const imageStyle = {
  width: imageWidth + "px",
  height: imageHeight + "px",
  objectFit: "cover",
} as React.CSSProperties;

const textStyle = {
  width: "90%",
  color: "white",
  textAlign: "center",
  fontSize: "24px",
  zIndex: 100,
  bottom: "15%",  
  left: "50%",
  transform: "translate(-50%, 0)",
  position: "absolute",
} as React.CSSProperties;

const overlayStyle = {
  position: "absolute",
  top: padding.top+"px", left: padding.left+"px", bottom: padding.bottom+"px", right: padding.right+"px", 
  backgroundColor: overlayColor,
} as React.CSSProperties;

function Card(props: cardProps) {
  return (
    <div style={containerStyle}>
      <img src={props.url} alt="" style={imageStyle}/>
      <div style={overlayStyle}></div>
      <b style={textStyle}> {props.children} </b>
    </div>
  )
}

export default Card;