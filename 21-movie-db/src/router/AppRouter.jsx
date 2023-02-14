import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import SingleMovie from '../pages/SingleMovie'
import Home from '../pages/Home'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='movies/:id' element={<PrivateRouter/>}>
                    <Route path='' element={<SingleMovie/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter