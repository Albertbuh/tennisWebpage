import Background from "src/Background";
import { imageImports } from "src/importImages";

import '../styles/news/news.css';
import Footer from "src/footer/Footer";

export default function News() {
  return (
    <>
    <section className="news">
      <Background image={imageImports.get("backgroundNews")} height={250}/>
      <h1> Новости </h1>
      <div className="news-grid">
        {
          currentNews.map(news => (
            <NewsItem key={news.id} data={news.data} subject={news.subject} imageUrl={news.imageUrl}/>
          ))
        }
      </div>
      <Footer/>
    </section>
    </>
  )
}

interface NewsProps {
  data: string, 
  subject: string,
  imageUrl:  string,
}

function NewsItem(props: NewsProps) {
  return (
    <div className="news-item">
      <img src={props.imageUrl} alt="" />
      <p className="data">{props.data}</p>
      <p className="subject">{props.subject}</p>
      <button> Подробнее </button>
    </div>
  )
}

const currentNews= [
  {
    id: 0,
    data: "22 июля 2022 года",
    imageUrl: imageImports.get("news_1"),
    subject: "Consequat consequat augue quis urna arcu scelerisque ac moteus, sed. Arcu orci quam lectus orci in."
  },
  {
    id: 1,
    data: "4 апреля 2022 года",
    imageUrl: imageImports.get("news_2"),
    subject: "Suspendisse orci fermentum congue enim risus velit neque. Mi."
  },
  {
    id: 2,
    data: "30 ноября 2021 года",
    imageUrl: imageImports.get("news_3"),
    subject: "Interdum proin amet nibh tortor sed vulputate mattis. Ridiculus porta ipsum neque ut vel vitae et."
  },
  {
    id: 3,
    data: "22 июля 2022 года",
    imageUrl: imageImports.get("news_4"),
    subject: "Nisl tempor vel tempor adipiscing id nulla magnis ut ultrices. Malesuada metus et in blandit."
  },
  {
    id: 4,
    data: "22 июля 2022 года",
    imageUrl: imageImports.get("news_5"),
    subject: "Livero fermentum pretium sed orci nunc, sagittis mollis lacus dolor. Tincidunt et enim sed ac faucibus."
  },
  {
    id: 5,
    data: "22 июля 2022 года",
    imageUrl: imageImports.get("news_6"),
    subject: "Netus henderit tortor laoreet duis proin nulla faucibus ultricies. Et urna fringilla nunc, metus nec."
  },
]
