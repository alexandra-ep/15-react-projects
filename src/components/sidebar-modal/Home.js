import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <div className="sidebar-modal__home">
      <button className="sidebar-modal__home__toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="sidebar-modal__home__btn" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};

export default Home;
