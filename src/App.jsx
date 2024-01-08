import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchToDoList, fetchUser } from './api/API';

import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './hoc/AuthProvider';
import Layout from './components/Layout/Layout';
import ToDo from './components/ToDo/ToDo';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ToDoChange from './components/ToDo/ToDoChange/ToDoChange';

import { RequireAuth } from './hoc/RequireAuth';

function App() {
   const {
      data: todos,
      error,
      refetch,
      isError,
      isLoading,
   } = useQuery({
      queryKey: ['get-todolist'],
      queryFn: fetchToDoList,
   });

   const {
      data: user,
      error: errorUser,
      isError: isErrorUser,
      isLoading: isLoadingUser,
   } = useQuery({
      queryKey: ['get-user'],
      queryFn: fetchUser,
   });

   const [showNavigation, setShowNavigation] = useState(true);

   return (
      <AuthProvider>
         <Routes>
            <Route
               path="/"
               element={<Layout showNavigation={showNavigation} />}
            >
               <Route index element={<HomePage />} />

               <Route
                  path="todo-list"
                  element={
                     <RequireAuth>
                        <ToDo
                           data={todos}
                           isLoading={isLoading}
                           isError={isError}
                           error={error}
                           refetch={refetch}
                        />
                     </RequireAuth>
                  }
               />

               <Route
                  path="todo-list/edit/:id"
                  element={<ToDoChange data={todos} refetch={refetch} />}
               />
               <Route path="about" element={<AboutPage />} />
               <Route
                  path="login"
                  element={
                     <LoginPage
                        errorUser={errorUser}
                        isErrorUser={isErrorUser}
                        isLoadingUser={isLoadingUser}
                     />
                  }
               />
               <Route
                  path="*"
                  element={<NotFound setShowNavigation={setShowNavigation} />}
               />
            </Route>
         </Routes>
      </AuthProvider>
   );
}

export default App;
