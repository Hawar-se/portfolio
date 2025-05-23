import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Box component="main" sx={{ flex: 1 }}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default Layout;
