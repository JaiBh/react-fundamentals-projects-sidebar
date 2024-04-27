import { useGlobalContext } from "../../Context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { CloseModal, isModalOpen } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={CloseModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};
export default Modal;
