import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <Navigation />
         </div>
      </header>
   );
};
export default Header;
