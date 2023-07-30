interface linkProps {
  subheader: string;
  subject: string;
  icon: string | undefined;
}
export default function LinkItem(props: linkProps) {
  return (
    <>
      <div className="item">
        <p className="subheader"> {props.subheader} </p>
        <p className="subject"> {props.subject} </p>
        <img src={props.icon} alt="linkIcon" className="link-icon" />
      </div>
    </>
  );
}