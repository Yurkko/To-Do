import React, { useState } from 'react';

const ToDoListSelect = ({ selectedOption, setSelectedOption }) => {
   const optionsData = [
      { value: 'all', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'completed', label: 'Completed' },
   ];

   const handleChangeSelectOption = e => {
      setSelectedOption(e.target.value);
   };

   return (
      <>
         <select value={selectedOption} onChange={handleChangeSelectOption}>
            {optionsData.map(item => (
               <option key={item.value} value={item.value}>
                  {item.label}
               </option>
            ))}
         </select>
      </>
   );
};

export default ToDoListSelect;
