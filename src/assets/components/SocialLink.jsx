const SocialLink = ({ url, icon }) => {
  return (
    <li>
      <a href={url}>{icon}</a>
    </li>
  );
};
export default SocialLink;
