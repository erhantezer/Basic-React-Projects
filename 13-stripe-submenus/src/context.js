import { createContext, useContext, useState } from "react";
import sublinks from './data';
//! 1 create
const AppContext = createContext();

//! custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true)
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
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
            page,
            location,
        }}>
            {children}
        </AppContext.Provider>
    )
}