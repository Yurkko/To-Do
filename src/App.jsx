import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchToDoList, fetchUser } from './api/API';

const ToDo = lazy(() => import('./components/ToDo/ToDo'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ToDoChange = lazy(
   () => import('./components/ToDo/ToDoChange/ToDoChange'),
);
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './components/NotFound/NotFound';

function App() {
   const {
      isLoading,
      data: todos,
      isError,
      error,
      refetch,
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

   const [isAuthorized, setIsAuthorized] = useState(false);
   const [showNavigation, setShowNavigation] = useState(true);

   useEffect(() => {
      setIsAuthorized(user?.isAuthorized);
   }, [user]);

   return (
      <>
         <BrowserRouter>
            {showNavigation && (
               <Header
                  isAuthorized={isAuthorized}
                  setIsAuthorized={setIsAuthorized}
               />
            )}

            <Suspense
               fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}
            >
               <Routes>
                  <Route path="/" element={<HomePage />} />

                  <Route element={<PrivateRoute isAuthorized={isAuthorized} />}>
                     <Route
                        path="/todo-list"
                        element={
                           <ToDo
                              data={todos}
                              isLoading={isLoading}
                              isError={isError}
                              error={error}
                              refetch={refetch}
                           />
                        }
                     />
                  </Route>

                  <Route
                     path="/todo-list/edit/:id"
                     element={<ToDoChange data={todos} refetch={refetch} />}
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route
                     path="/login"
                     element={
                        <LoginPage
                           errorUser={errorUser}
                           isErrorUser={isErrorUser}
                           isAuthorized={isAuthorized}
                           isLoadingUser={isLoadingUser}
                           setIsAuthorized={setIsAuthorized}
                        />
                     }
                  />
                  <Route
                     path="*"
                     element={
                        <NotFound setShowNavigation={setShowNavigation} />
                     }
                  />
               </Routes>
            </Suspense>
         </BrowserRouter>
      </>
   );
}

export default App;
