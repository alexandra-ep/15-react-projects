import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen
          ? "sidebar-modal__overlay show-modal"
          : "sidebar-modal__overlay"
      }`}
    >
      <div className="sidebar-modal__overlay__modal">
        <h3>Modal Content</h3>
        <button className="close-modal" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
