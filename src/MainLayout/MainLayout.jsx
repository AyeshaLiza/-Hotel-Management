import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const MainLayout = ({children}) => {
 
 return (
  <HelmetProvider>
     <Helmet>
        <title>Hotel management</title>
        <meta name='description' content='Hotel Managemenet Website' />

      </Helmet>
   <Navbar></Navbar>
  
   <Outlet></Outlet>
  
  </HelmetProvider>
 );
};

export default MainLayout;