import styles from './AboutPage.module.scss';
import avatar from '../../assets/images/avatar.jpg';

const AboutPage = () => {
   return (
      <div className={styles.about}>
         <div className={`${styles.about__container} container`}>
            <h2 className={styles.about__title}>About Our App</h2>
            <p className={styles.about__text}>
               Welcome to our amazing application! This page provides
               information about the application, the technologies used in its
               development, and a brief overview of the author.
            </p>
            <div className={styles.about__author_info}>
               <img
                  src={avatar}
                  alt="Author"
                  className={styles.about__author_img}
               />
               <p className={styles.about__author_descr}>
                  Hi, I'm the author of this app. I love coding and creating
                  awesome projects. Feel free to reach out if you have any
                  questions!
               </p>
            </div>
         </div>
      </div>
   );
};
export default AboutPage;
