import { BarLoader } from 'react-spinners';
import styles from '../ToDoList.module.scss';

const ToDoListLoading = () => {
   return (
      <div className={styles.todo__list__loading}>
         <BarLoader color="#213358" loading />
      </div>
   );
};
export default ToDoListLoading;
