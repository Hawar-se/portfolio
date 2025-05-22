import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, List, ListItem, Divider } from '@mui/material';
import Image1 from '../assets/n-hero.png';
import Image3 from '../assets/n-logo.png';
import Image5 from '../assets/n-p.png';
import Image6 from '../assets/Bird.svg';
import Image7 from '../assets/n-w.png';
import {  ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



const Home = () => {
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
      Nightingale.io
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
      Angular Development . Design System  · UI Design· Figma

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
          src={Image1}
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
          Nightingale.io 
         </Typography>
          <Typography variant="h6">
          Improving Logic and Flow in Audiobook Distribution          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Role & Challenge */}
      <Box sx={{ display: 'flex', alignItems:'center', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
        <Box sx={{ flex: 1 }}>
        <img
            src={Image3}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
        
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
          Challenge:
          </Typography>
          <Typography>
          Nightingale.io's audiobook publishing platform had a complex and inconsistent logic for creating and distributing audiobook titles. This complexity affected both the user experience and the internal workflows of publishers.          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
        <Box sx={{ flex: 1 }}>
        <Box sx={{ flex: 2 }}>
        <Typography variant="h6" gutterBottom>
            Role
          </Typography>
          <Typography>UX Designer & Front-end Contributor (Angular)</Typography>
        </Box>
        <img
            src={Image5}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Summary Section with Image */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: 4, alignItems: 'center', mb: 5 }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography>
          I led the redesign of a core feature within Nightingale.io, a complex web-based distribution and publishing application. The focus was on creating a streamlined and user-friendly workflow for adding new titles to the platform. This area was previously confusing due to high technical complexity and legacy logic.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={Image6}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Responsibilities List */}
      <Box sx={{ display: 'flex', alignItems:'center', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>

      <Box sx={{ flex: 2 }}>
      <Typography variant="h6" gutterBottom>
          My Responsibilities
        </Typography>
<List>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 20 }}>
      <FiberManualRecordIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Created Figma prototypes to demonstrate new interaction paths and logic" />
  </ListItem>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 20 }}>
      <FiberManualRecordIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Worked closely with Angular developers to implement the redesigned workflow" />
  </ListItem>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 20 }}>
      <FiberManualRecordIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Ensured UX consistency across components and handled responsive behavior" />
  </ListItem>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 20 }}>
      <FiberManualRecordIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Designed new workflows and improved UX flow with low- to high-fidelity wireframes" />
  </ListItem>
  <ListItem>
    <ListItemIcon sx={{ minWidth: 20 }}>
      <FiberManualRecordIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Mapped the existing title-creation process and identified user pain points" />
  </ListItem>
</List>

      </Box>
      <Box sx={{ flex: 1 }}>
  <img
    src={Image7}
    alt="Project Summary Visual"
    style={{ width: '100%', height: 'auto', borderRadius: 12, border: '2px solid #000' }}
  />
</Box>

        </Box>
    </Box>
  );
};

export default Home;
