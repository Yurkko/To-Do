import styles from './EmptyList.module.scss';

const EmptyList = ({ setHasData }) => {
   return (
      <div className={styles.empty__list}>
         <p className={styles.empty__list_text}>No tasks found</p>
         <button
            type="button"
            className={styles.empty__list_btn}
            onClick={() => setHasData(true)}
         >
            Add first task
         </button>
      </div>
   );
};
export default EmptyList;
