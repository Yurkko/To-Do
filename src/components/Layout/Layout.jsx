import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = ({ showNavigation }) => {
   return (
      <>
         {showNavigation && <Header />}
         <main>
            <Outlet />
         </main>
      </>
   );
};
export default Layout;
