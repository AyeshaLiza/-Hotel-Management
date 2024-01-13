import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import parav1 from '../assets/banner/parav1.mp4'
import Container from './Container';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const MainLayout = ({children}) => {
 const location = useLocation()
 const isHomePage = location.pathname === '/';
 
 return (
  <HelmetProvider>
     <Helmet>
        <title>Hotel management</title>
        <meta name='description' content='Hotel Managemenet Website' />

      </Helmet>
   <Navbar></Navbar>
   <Container>
   <Outlet></Outlet>
   </Container>
  </HelmetProvider>
 );
};

export default MainLayout;