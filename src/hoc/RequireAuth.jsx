import { Navigate } from 'react-router-dom';
import { useAuth } from '.././hooks/useAuth';

const RequireAuth = ({ children }) => {
   const { isAuthorized } = useAuth();

   if (!isAuthorized) {
      return <Navigate to="/login" />;
   }

   return children;
};

export { RequireAuth };
