import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
  };
  const OpenSidebar = () => {
    console.log("open");
    setIsSidebarOpen(true);
  };
  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        OpenModal,
        CloseModal,
        OpenSidebar,
        CloseSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
