import { useState } from 'react';
import styles from './ToDoAdd.module.scss';
import { useMutation } from 'react-query';
import { postTask } from '../../../api/API';

const ToDoAdd = ({ refetch }) => {
   const [nameTask, setNameTask] = useState('');
   const [error, setError] = useState('');

   const mutation = useMutation(postTask, {
      onSuccess: () => {
         refetch();
         setError('');
         setNameTask('');
      },
      onError: error => {
         setError(error.message || 'Error adding the task.');
      },
   });

   const handlePostData = () => {
      if (nameTask.length < 5 || nameTask.length > 20) {
         setError(`Please enter a name between ${5} and ${20} characters.`);
      } else {
         mutation.mutate({
            title: nameTask,
            description: '',
            checked: false,
            creationDate: new Date().toISOString(),
         });
      }
   };

   return (
      <div>
         <input
            type="text"
            placeholder="Enter name task"
            value={nameTask}
            className={styles.todo__list_name}
            onChange={e => setNameTask(e.target.value)}
         />
         {error && <p className="error">{error}</p>}

         <button
            type="button"
            onClick={handlePostData}
            className={styles.todo__list_btn}
            disabled={mutation.isLoading}
         >
            {mutation.isLoading ? 'Adding...' : 'Add new task'}
         </button>
      </div>
   );
};

export default ToDoAdd;
