import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = ({ isAuthorized, setIsAuthorized }) => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <Navigation
               isAuthorized={isAuthorized}
               setIsAuthorized={setIsAuthorized}
            />
         </div>
      </header>
   );
};
export default Header;
