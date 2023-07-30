import {useRef, useEffect, useState} from 'react';

function Background(props: { image: string }) {
  const imageRef = useRef(null);
  const [imageHeight, setHeight] = useState(0);
  useEffect(() => {
    //@ts-ignore
    setHeight(imageRef?.current?.clientHeight);
    console.log(
      //@ts-ignore
      `First background image height: ${imageRef?.current?.clientHeight}`
    );
  });

  return (
    <>
      <img src={props.image} ref={imageRef} className="background" />
      <div
        className="background overlay"
        style={{
          height: imageHeight,
          backgroundColor: "var(--overlay-color)",
        }}
      ></div>
    </>
  );
}

export default Background;