
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const currenUser = true;
    return currenUser ? <Outlet /> : <Navigate to={"/"} replace />
}

export default PrivateRouter;