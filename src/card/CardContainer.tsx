//@ts-ignore
import card from "../assets/cardThumb1.png";
//@ts-ignore
import card2 from "../assets/cardThumb2.png";
//@ts-ignore
import card3 from "../assets/cardThumb3.png";

import Card from "./Card";

function CardContainer() {
  return (
    <>
      <div
        style={{
          margin: "80px var(--side-paddings)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card url={card}>
          5 летних <br></br>
          грунтовых кортов
        </Card>
        <Card url={card2}>Зал с покрытием &quot;искусственная трава&quot;</Card>
        <Card url={card3}>Зал с покрытием &quot;Хард&quot;</Card>
      </div>
    </>
  );
}

export default CardContainer;