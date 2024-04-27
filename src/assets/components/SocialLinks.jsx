import { social } from "../../data";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <ul className="social-links">
      {social.map((link) => (
        <SocialLink key={link.id} {...link}></SocialLink>
      ))}
    </ul>
  );
};
export default SocialLinks;
