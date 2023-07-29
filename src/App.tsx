//import Header from './Header/Header';
import './styles/styles.css';
import Header from './header/Header';
import FirstSection from './sectionOne/First';
//@ts-ignore
 import background from './assets/background.png';

 import {useRef, useEffect, useState,
         } from 'react';

function App() {

  return (
    <>
      <div className="first-wrap">
        <Background/>
        <Header />
        <FirstSection />
      </div>
    </>
  );
}

function Background() {
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
      <img src={background} ref={imageRef} className="background"/>
      <div className="background overlay" style={{
        height: imageHeight,
        backgroundColor: "var(--overlay-color)",
      }}></div>
    </>
  );
}


export default App;
