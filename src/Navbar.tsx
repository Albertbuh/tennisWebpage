import { Link} from "react-router-dom";

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
    href: "#",
    text: "Услуги"
  },
  {
    href: "#",
    text: "Детский теннис"
  },
  {
    href: "#",
    text: "Галерея"
  },
  {
    href: "#",
    text: "Цены"
  },
  {
    href: "#",
    text: "Контакты"
  },
]

export default Navbar;