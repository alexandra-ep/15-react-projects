import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function SidebarModal() {
  return (
    <div className="sidebar-modal">
      <Home />
      <Sidebar />
      <Modal />
    </div>
  );
}
