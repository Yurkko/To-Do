import { useState } from 'react';
import _debounce from 'lodash/debounce';

const ToDoListSearch = ({ data, setTodos }) => {
   const [searchValue, setSearchValue] = useState('');

   const handleChange = e => {
      const value = e.target.value;
      setSearchValue(value);
      handleSearch(value);
   };

   const handleSearch = _debounce(value => {
      const filteredTodos = data.filter(item =>
         item.title.toLowerCase().includes(value.toLowerCase()),
      );
      setTodos(filteredTodos);
   }, 500);

   return (
      <>
         <input
            type="search"
            placeholder="Search for a task by name"
            value={searchValue}
            onChange={handleChange}
         />
      </>
   );
};

export default ToDoListSearch;
