import styles from './LoginPage.module.scss';

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ errorUser, isErrorUser, isLoadingUser }) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const { sigin, isAuthorized, isLoading } = useAuth();
   const navigate = useNavigate();

   const handleSubmit = async e => {
      e.preventDefault();
      sigin(username, password);
   };

   if (isLoadingUser) {
      return <p style={{ textAlign: 'center' }}>Loading user data...</p>;
   }
   if (isAuthorized) {
      navigate('/');
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
            <button
               type="submit"
               className={styles.login__form_submit}
               disabled={isLoading}
            >
               {isLoading ? 'Loading...' : 'Login'}
            </button>
         </form>
      </>
   );
};
export default LoginPage;
