const Link = ({ url, text, icon }) => {
  return (
    <li>
      <a href={url}>
        {icon}
        {text}
      </a>
    </li>
  );
};
export default Link;
