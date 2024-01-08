import ToDoListLoading from './ToDoListLoading/ToDoListLoading';
import styles from './ToDoList.module.scss';
import ListItem from './ListItem/ListItem';

const ToDoList = ({
   data,
   error,
   isLoading,
   isError,
   setTodos,
   selectedOption,
   refetch,
}) => {
   const filterToDo = () => {
      switch (selectedOption) {
         case 'active':
            return data.filter(item => !item.checked);
         case 'completed':
            return data.filter(item => item.checked);
         default:
            return data;
      }
   };

   if (isLoading) {
      return <ToDoListLoading />;
   }
   if (isError) {
      return <p className="error">{error.message || 'Error fetching data.'}</p>;
   }

   return (
      <>
         <nav className={styles.todo__list}>
            {data.length > 0 ? (
               <ul className={styles.todo__list__ul}>
                  {filterToDo().map((item, id) => (
                     <ListItem
                        id={id}
                        data={data}
                        key={item.id}
                        refetch={refetch}
                        title={item.title}
                        setTodos={setTodos}
                        checked={item.checked}
                     />
                  ))}
               </ul>
            ) : (
               <p className={styles.no__task_found}>No task found</p>
            )}
         </nav>
      </>
   );
};

export default ToDoList;
