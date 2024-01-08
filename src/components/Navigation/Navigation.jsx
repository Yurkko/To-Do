import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {
   const { signout, isAuthorized } = useAuth();

   const getNavLinkClassName = ({ isActive }) =>
      isActive ? 'active-link' : '';

   const logOut = async () => {
      signout();
   };

   return (
      <div>
         <nav>
            <ul className={styles.header__list}>
               <li className={styles.header__item}>
                  <NavLink className={getNavLinkClassName} to="/">
                     Home
                  </NavLink>
               </li>
               {isAuthorized ? (
                  <li className={styles.header__item}>
                     <NavLink className={getNavLinkClassName} to="/todo-list">
                        ToDo
                     </NavLink>
                  </li>
               ) : null}

               <li className={styles.header__item}>
                  <NavLink className={getNavLinkClassName} to="/about">
                     About
                  </NavLink>
               </li>
               {isAuthorized ? (
                  <li className={styles.header__item}>
                     <button
                        type="button"
                        className={styles.header__btn_logout}
                        onClick={logOut}
                     >
                        Logout
                     </button>
                  </li>
               ) : (
                  <li className={styles.header__item}>
                     <NavLink className={getNavLinkClassName} to="/login">
                        Login
                     </NavLink>
                  </li>
               )}
            </ul>
         </nav>
      </div>
   );
};
export default Navigation;
