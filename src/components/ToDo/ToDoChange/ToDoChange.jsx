import { useState } from 'react';
import styles from './ToDoChange.module.scss';
import { changeNameTask } from '../../../api/API';
import { Link, useLocation, useParams } from 'react-router-dom';

const ToDoChange = ({ data, refetch }) => {
   const { id } = useParams();
   const location = useLocation();

   const [error, setError] = useState(null);
   const [newTaskName, setNewTaskName] = useState(location.state.title);

   const updateNameTask = async () => {
      if (!newTaskName.trim()) {
         setError('Task name cannot be empty.');
         return;
      }
      try {
         await changeNameTask(id, {
            ...data[location.state.dataId],
            title: newTaskName,
         });

         setError(null);
         refetch();
      } catch (error) {
         setError('Failed to update task name. Please try again.');
      }
   };

   return (
      <div className={styles.todo__change}>
         <div className={styles.todo__change_wrap}>
            <h2 className={styles.todo__change_text}>Change Task</h2>
            <input
               type="text"
               placeholder="Enter new name task"
               value={newTaskName}
               className={styles.todo__change_input}
               onChange={e => setNewTaskName(e.target.value)}
            />
            {error ? <p className="error">{error}</p> : null}
            <Link
               to="/todo-list"
               onClick={updateNameTask}
               className={styles.todo__change_link}
            >
               Save
            </Link>
         </div>
      </div>
   );
};
export default ToDoChange;
