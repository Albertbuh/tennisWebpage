import './styles/facility.css';

function Facility(props: { image: string; text: string }) {
  return (
    <div className="facility">
      <img src={props.image} alt="" />
      <div className="overlay"></div>
      <p>{props.text}</p>
    </div>
  );
}

export default Facility;