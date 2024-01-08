import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';
import error from '../../assets/images/404.png';
import { useEffect } from 'react';

const NotFound = ({ setShowNavigation }) => {
   const navigate = useNavigate();

   useEffect(() => {
      setShowNavigation(false);
   }, []);

   const returnHome = () => {
      navigate('/');
      setShowNavigation(true);
   };

   return (
      <div className={styles.page__notfound}>
         <div>
            <img className={styles.page__notfound_img} src={error} alt="404" />
            <button
               type="button"
               onClick={returnHome}
               className={styles.page__notfound_btn}
            >
               Return to Homepage
            </button>
         </div>
      </div>
   );
};
export default NotFound;
