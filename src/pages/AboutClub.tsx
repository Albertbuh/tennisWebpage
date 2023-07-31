import Background from "src/Background";
import { imageImports } from "src/importImages";

export default function About() {
  return (
    <>
      <Background image={imageImports.get("background")} height={400}/>
    </>
  )
}