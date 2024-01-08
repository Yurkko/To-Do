import { deleteTask, updateToDo } from '../../../../api/API';
import { useState } from 'react';
import styles from '../ToDoList.module.scss';
import shuffle from '../../../../assets/images/exchange.png';
import { Link } from 'react-router-dom';

const ListItem = ({ id, checked, title, data, setTodos, refetch }) => {
   const [error, setError] = useState(null);
   const [isDeleting, setIsDeleting] = useState(false);

   const handleChangeChecked = async (e, id) => {
      const updatedToDoList = data.map((item, index) =>
         index === id ? { ...item, checked: e.target.checked } : item,
      );
      setTodos(updatedToDoList);

      try {
         await updateToDo(data[id].id, {
            ...data[id],
            checked: e.target.checked,
         });
         refetch();
         setError(null);
      } catch (error) {
         setError('Error updating todo. Please try again.');
      }
   };

   const deleteToDo = async () => {
      try {
         setIsDeleting(true);
         setError(null);
         await deleteTask(data[id].id);
         setTodos(prevState =>
            prevState.filter(item => item.id !== data[id].id),
         );
         refetch();
      } catch (error) {
         setError('Error deleting todo. Please try again.');
      } finally {
         setIsDeleting(false);
      }
   };

   return (
      <li key={id} className={styles.todo__list__li}>
         <input
            type="checkbox"
            checked={checked}
            onChange={e => handleChangeChecked(e, id)}
         />
         <p className={styles.todo__list_name}>{title}</p>
         <Link
            to={`/todo-list/edit/${data[id].id}`}
            state={{ title: title, dataId: id }}
            className={styles.todo__list_change_btn}
         >
            <img src={shuffle} alt="Change"></img>
         </Link>
         <button
            type="button"
            onClick={deleteToDo}
            disabled={isDeleting}
            className={styles.todo__list_delete_btn}
         >
            {isDeleting ? 'Deleting...' : 'Delete'}
         </button>
         {error && <p className="error">{error}</p>}{' '}
      </li>
   );
};

export default ListItem;
