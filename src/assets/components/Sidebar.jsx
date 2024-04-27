import { useGlobalContext } from "../../Context";
import logo from "../../logo.svg";
import { FaTimes } from "react-icons/fa";
import Links from "./Links";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
  const { isSidebarOpen, CloseSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={CloseSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <Links></Links>
      <SocialLinks></SocialLinks>
    </aside>
  );
};
export default Sidebar;
