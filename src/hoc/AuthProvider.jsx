import { createContext, useEffect, useState } from 'react';
import { fetchUser, logoutUser, updateUser } from '../api/API';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
      try {
         await updateUser({
            username: username,
            password: password,
            isAuthorized: true,
         });
         localStorage.setItem('isAuthorized', JSON.stringify(true));
         setIsAuthorized(true);
         navigate('/todo-list');
      } catch (error) {
         console.log(error);
      }
   };

   const signout = async () => {
      try {
         await logoutUser({
            username: '',
            password: '',
            isAuthorized: false,
         });
         localStorage.removeItem('isAuthorized');
         setIsAuthorized(false);
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   };

   const value = { isAuthorized, sigin, signout };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
