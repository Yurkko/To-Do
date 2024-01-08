import { Navigate, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss';
import { updateUser } from '../../api/API';
import { useState } from 'react';

const LoginPage = ({
   errorUser,
   isErrorUser,
   isAuthorized,
   isLoadingUser,
   setIsAuthorized,
}) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async e => {
      e.preventDefault();
      try {
         await updateUser({
            username: username,
            password: password,
            isAuthorized: true,
         });
      } catch (error) {
         console.log(error);
      }
      setIsAuthorized(true);
      navigate('/todo-list');
   };

   // if (isAuthorized) {
   //    return <Navigate to="/" />;
   // }

   if (isLoadingUser) {
      return <p style={{ textAlign: 'center' }}>Loading user data...</p>;
   }

   if (isErrorUser) {
      return (
         <p style={{ textAlign: 'center' }}>
            Error fetching user data: {errorUser.message}
         </p>
      );
   }

   return (
      <>
         <form onSubmit={handleSubmit} className={styles.login__form}>
            <input
               type="text"
               name="name"
               placeholder="Enter your name"
               onChange={e => setUsername(e.target.value)}
               required
            />
            <input
               required
               type="password"
               name="password"
               placeholder="Enter password"
               onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.login__form_submit}>
               Login
            </button>
         </form>
      </>
   );
};
export default LoginPage;
