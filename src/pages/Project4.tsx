import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, List, ListItem, Divider } from '@mui/material';
import Image3 from '../assets/u.png';
import Image1 from '../assets/u-prototype.png';

const Project4 = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3, maxWidth: '1100px', margin: 'auto' }}>
      {/* Back Link */}
      <Box sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" underline="none" color="primary">
          ← Back to Home
        </Link>
      </Box>

      {/* Hero Section */}
      <Typography variant="h3" component="h1" gutterBottom>
        Unicontrol Application
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        UI/UX Design · Mobile-First Approach · Wireframing
      </Typography>

   {/* Hero Section */}
   <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 400, md: 700 },
          mb: 4,
          overflow: 'hidden',
          borderRadius: 2,
        }}
      >
        <img
          src={Image3}
          alt="Unicontrol Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
          Unicontrol Application 
         </Typography>
          <Typography variant="h6">
            UI/UX Design · Mobile-First Approach · Wireframing
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />


      {/* Role & Challenge */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
       
         <Box sx={{ flex: 1 }}>
          <img
            src={Image1}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Challenge
          </Typography>
          <Typography>
            The existing Unicontrol website lacked a responsive design, making it difficult for users to navigate on mobile and tablet devices. The challenge was to create a mobile-first wireframe prototype that would enhance user experience across various screen sizes.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Summary Section with Image */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: 4,
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography>
            I developed wireframe prototypes focusing on mobile and tablet interfaces for the Unicontrol website. The goal was to improve usability and ensure a seamless experience across devices, adhering to a mobile-first design approach.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={Image1}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />
        {/* Hero Section */}
        <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 400, md: 700 },
          mb: 4,
          overflow: 'hidden',
          borderRadius: 2,
        }}
      >
         <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Role
          </Typography>
          <Typography>UI/UX Designer</Typography>
        </Box>
        <img
          src={Image1}
          alt="Unicontrol Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Responsibilities List */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" gutterBottom>
          My Responsibilities
        </Typography>
        <List>
          <ListItem>Conducted UX analysis of the existing website</ListItem>
          <ListItem>Designed low-fidelity wireframes for mobile and tablet views</ListItem>
          <ListItem>Focused on intuitive navigation and user-friendly layouts</ListItem>
          <ListItem>Ensured consistency with the brand's visual identity</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Project4;
