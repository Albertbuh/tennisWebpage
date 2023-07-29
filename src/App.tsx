//import Header from './Header/Header';
import './styles/styles.css';
import Header from './header/Header';
import FirstSection from './sectionOne/First';
import Card from './card/Card';
//@ts-ignore TS wouldn't like to read .png format T_T
import background from './assets/background.png';
//@ts-ignore
import card from './assets/cardThumb1.png';
//@ts-ignore
import card2 from './assets/cardThumb2.png';
//@ts-ignore
import card3 from './assets/cardThumb3.png';


import {useRef, useEffect, useState,} from 'react';

function App() {
  return (
    <>
      <div className="first-wrap">
        <Background image={background}/>
        <Header />
        <FirstSection />
      </div>
      <div style={{
        margin: "80px var(--side-paddings)",
        display: "flex",
        justifyContent: "space-between",
      }} >
        <Card url={card}> 
        5 летних <br></br>
        грунтовых кортов
        </Card>
        <Card url={card2}> 
        Зал с покрытием &quot;искусственная трава&quot;
        </Card>
        <Card url={card3}> 
        Зал с покрытием &quot;Хард&quot;
        </Card>
      </div>
      

    </>
  );
}

function Background(props: {image:string}) {
  const imageRef = useRef(null);
  const [imageHeight, setHeight] = useState(0);
  useEffect(() => {
    //@ts-ignore
    setHeight(imageRef?.current?.clientHeight);
    //@ts-ignore
    console.log(`First background image height: ${imageRef?.current?.clientHeight}`);
  })

  return(
    <>
      <img src={props.image} ref={imageRef} className="background"/>
      <div className="background overlay" style={{
        height: imageHeight,
        backgroundColor: "var(--overlay-color)",
      }}></div>
    </>
  );
}


export default App;
