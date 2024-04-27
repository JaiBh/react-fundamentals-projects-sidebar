import { useGlobalContext } from "../../Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { OpenSidebar, OpenModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={OpenSidebar}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={OpenModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
