interface buttonProps {
  className: string;
  label: string;
}
function VideoButton(props: buttonProps) {
  return (
    <>
      <div className="button-container">
        <button className={props.className}>&#9658;</button>
        <span className="button-label"> {props.label}</span>
      </div>
    </>
  );
}

export default VideoButton;