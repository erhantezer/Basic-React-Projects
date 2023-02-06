import { createContext, useContext, useState } from "react";

//! 1 create
const AppContext = createContext();

//! custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    };

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    };

    return (
        <AppContext.Provider value={{ 
        openSidebar, 
        closeSidebar, 
        openSubmenu, 
        closeSubmenu, 
        isSidebarOpen, 
        isSubmenuOpen, 
        }}>
            {children}
        </AppContext.Provider>
    )
}