import { Link} from "react-router-dom";
import './styles/linkButton.css';
function Navbar() {
  return (
    <nav className="middle-section">
      {
        links.map((link, index) => (
          <Link to={link.href} key={index} className="link-button"> {link.text} </Link>
        ))
      }
    </nav>
  )
}
const links = [
  {
    href: "/",
    text: "Главная"
  },
  {
    href: "/about_club",
    text: "О клубе"
  },
  {
    href: "/news",
    text: "Новости"
  },
  {
    href: "/facilities",
    text: "Услуги"
  },
  {
    href: "/kids_tennis",
    text: "Детский теннис"
  },
  {
    href: "/galerey",
    text: "Галерея"
  },
  {
    href: "/prices",
    text: "Цены"
  },
  {
    href: "/contacts",
    text: "Контакты"
  },
]

export default Navbar;