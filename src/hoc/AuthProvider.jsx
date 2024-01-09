import { createContext, useEffect, useState } from 'react';
import { fetchUser, logoutUser, updateUser } from '../api/API';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [isAuthorized, setIsAuthorized] = useState(() => {
      const storedAuthStatus = localStorage.getItem('isAuthorized');
      return storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
   });
   const navigate = useNavigate();

   // useEffect(() => {
   //    const checkAuthStatus = async () => {
   //       try {
   //          const user = await fetchUser();
   //          const { isAuthorized } = user;

   //          setIsAuthorized(isAuthorized);
   //       } catch (error) {
   //          console.error('Error checking authentication status:', error);
   //       }
   //    };
   //    checkAuthStatus();
   // }, []);

   const sigin = async (username, password) => {
      setIsLoading(true);
      try {
         await updateUser({
            username: username,
            password: password,
            isAuthorized: true,
         });
         navigate('/todo-list');
         localStorage.setItem('isAuthorized', JSON.stringify(true));
         setIsAuthorized(true);
         setIsLoading(false);
      } catch (error) {
         setIsLoading(true);
         console.log(error);
      }
   };

   const signout = async () => {
      setIsLoading(true);
      try {
         await logoutUser({
            username: '',
            password: '',
            isAuthorized: false,
         });
         navigate('/');
         localStorage.removeItem('isAuthorized');
         setIsAuthorized(false);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   const value = { isAuthorized, isLoading, sigin, signout };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
