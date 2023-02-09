import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Error from "../pages/Error"
import Home from "../pages/Home"
import SingleCocktail from "../pages/SingleCocktail"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="cocktail/:id" element={<PrivateRouter/>} >
                    <Route path="" element={<SingleCocktail/>} />
                </Route>
                <Route path='*' element={<Error />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter