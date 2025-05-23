import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (target: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <AppBar position="sticky" color="default" elevation={3}>
      <Toolbar sx={{ justifyContent: 'space-between',
          top: 1,
          zIndex: theme.zIndex.appBar,
          bgcolor: 'background.paper',
          boxShadow: theme.shadows[1],
          px: 3,
          py: 1.5,
          display: 'flex',
         alignItems: 'center',
         }}>
        <Button onClick={() => navigate('/')} sx={{ textTransform: 'none' }}>
          <Typography variant="h6" fontWeight="bold" color="inherit">
            Hawar
          </Typography>
        </Button>

        <Stack direction="row" spacing={2}>
          <Button onClick={() => handleNavClick('projects')} color="primary">
            Projects
          </Button>
          <Button onClick={() => handleNavClick('about')} color="primary">
            About
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
