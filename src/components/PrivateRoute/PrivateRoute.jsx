import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthorized }) => {
   if (!isAuthorized) {
      return <Navigate to="/login" />;
   }
   return <Outlet />;
};
export default PrivateRoute;
