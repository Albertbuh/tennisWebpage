import Background from "src/Background";
import { imageImports } from "src/importImages";

function NoPage() {
  const headerStyle = {
    color: "white",
    fontSize: "64px",
    textAlign: "center",
    paddingTop: "100px",
  } as React.CSSProperties;

  return (
    <>
      <Background image={imageImports.get("nopage")} height={1080} />
      <div style={headerStyle}>
        <h1 > Will be soon </h1>
      </div>
    </>
  );
}

export default NoPage;
