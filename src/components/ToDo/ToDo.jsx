import ToDoAdd from './ToDoAdd/ToDoAdd';
import ToDoList from './ToDoList/ToDoList';
import ToDoListSearch from './ToDoListSearch/ToDoListSearch';
import ToDoListSelect from './ToDoListSelect/ToDoListSelect';
import EmptyList from './EmptyList/EmptyList';

import styles from './ToDo.module.scss';
import { useEffect, useState } from 'react';

const ToDo = ({ data, error, isLoading, isError, refetch }) => {
   const [todos, setTodos] = useState([]);
   const [hasData, setHasData] = useState(false);

   const [selectedOption, setSelectedOption] = useState('');

   useEffect(() => {
      if (data && data.length > 0) {
         setTodos(data);
         setHasData(true);
      }
   }, [data]);

   return (
      <div className={styles.todo}>
         <div className={styles.todo__wrap}>
            {/* Text */}
            <h2 className={styles.todo__text}>Your To Do List</h2>
            {hasData ? (
               <>
                  {/* Navigation */}
                  <div className={styles.todo__navigation}>
                     <ToDoListSearch data={data} setTodos={setTodos} />
                     <ToDoListSelect
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                     />
                  </div>
                  {/* List */}
                  <ToDoList
                     data={todos}
                     error={error}
                     isError={isError}
                     isLoading={isLoading}
                     refetch={refetch}
                     setTodos={setTodos}
                     selectedOption={selectedOption}
                  />
                  {/* Add task */}
                  <ToDoAdd refetch={refetch} />
               </>
            ) : (
               <EmptyList setHasData={setHasData} />
            )}
         </div>
      </div>
   );
};

export default ToDo;
