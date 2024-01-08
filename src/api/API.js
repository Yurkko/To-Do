import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

export const fetchToDoList = async () => {
   const response = await axios.get('todos');
   return response.data;
};

export const postTask = async payload => {
   const response = await axios.post('todos', payload);
   return response.data;
};

export const updateToDo = async (id, payload) => {
   const response = await axios.put(`todos/${id}`, payload);
   return response.data;
};
export const deleteTask = async id => {
   const response = await axios.delete(`todos/${id}`);
   return response.data;
};

export const changeNameTask = async (id, payload) => {
   const response = await axios.put(`todos/${id}`, payload);
   return response.data;
};

export const fetchUser = async () => {
   const response = await axios.get('user');
   return response.data;
};
export const updateUser = async payload => {
   const response = await axios.put('user', payload);
   return response.data;
};

export const logoutUser = async payload => {
   const response = await axios.put('user', payload);
   return response.data;
};
