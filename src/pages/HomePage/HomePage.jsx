import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
   return (
      <div className={styles.home}>
         <div className={`${styles.home__container} container`}>
            <h2 className={styles.home__title}>Welcome to your ToDo List</h2>
            <p className={styles.home__descr}>
               Here you can create your to-dos and plan your day. 📝
            </p>

            <Link to="/todo-list" className={styles.home__link}>
               Get started
            </Link>
         </div>
      </div>
   );
};

export default HomePage;
