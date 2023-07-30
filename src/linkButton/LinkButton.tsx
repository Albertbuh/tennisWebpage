import { ReactNode } from "react";
import '../styles/linkButton.css';

interface linkProps {
  href: string,
  children: ReactNode
}
export default function LinkButton(props: linkProps) {
  return <a className="link-button" href={props.href}> {props.children}</a>;
}