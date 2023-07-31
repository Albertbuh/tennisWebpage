import './styles/styles.css';

function Background(props: { image: string; height?: number | string }) {
  // const imageRef = useRef(null);
  // const [imageHeight, setHeight] = useState(0);
  // useEffect(() => {
  //   //@ts-ignore
  //   setHeight(imageRef?.current?.clientHeight);
  //   console.log(
  //     //@ts-ignore
  //     `First background image height: ${imageRef?.current?.clientHeight}`
  //   );
  // });

  let imageHeight : string; 
  if(typeof(props.height) === typeof(Number)) {
    imageHeight = props.height + "px";
  } else {
    imageHeight = props.height as string;
  }

  return (
    <>
      <img src={props.image}className="background" style={{height:imageHeight}}/>
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