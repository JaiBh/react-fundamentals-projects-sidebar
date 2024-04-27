import { links } from "../../data";
import Link from "./Link";

const Links = () => {
  return (
    <ul className="links">
      {links.map((link) => (
        <Link key={link.id} {...link}></Link>
      ))}
    </ul>
  );
};
export default Links;
