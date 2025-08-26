import { Box, Typography, Divider, Chip, Link } from '@mui/material';
import Image2 from '../assets/A&G.png';
import { Link as RouterLink } from 'react-router-dom';


const Project5 = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3, maxWidth: '1100px', margin: 'auto' }}>
      {/* Back Link */}
      <Box sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" underline="none" color="primary">
          ← Back to Home
        </Link>
      </Box>

      {/* Title & Status */}
      <Typography variant="h3" component="h1" gutterBottom>
        A&G English and More -Logo Design
      </Typography>

      <Chip label="In Progress" color="warning" variant="outlined" sx={{ mb: 3 }} />

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Branding / Logo Design
      </Typography>

      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 300, md: 500 },
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 2,
        }}
      >
        <img
          src={Image2}
          alt="A&G Logo Preview"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Details Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Project Description
          </Typography>
          <Typography sx={{ mb: 2 }}>
            I’m currently working on the visual identity and logo design for a new language-learning
            company called <strong>“A&G English and More.”</strong> The goal is to create a logo that reflects
            both professionalism and friendliness—matching their mission of making English learning
            accessible and engaging.
          </Typography>

          <Typography variant="h6" gutterBottom>
            My Role
          </Typography>
          <Typography>
            I’m leading the logo design process, from early sketches to digital drafts, and working closely with
            the client to define the visual tone.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Status Note or Future Plans */}
      <Typography variant="h6" gutterBottom>
        Status & Next Steps
      </Typography>
      <Typography>
        This project is currently in the design phase. Once the client approves the initial concepts,
        I will finalize the logo, prepare brand assets, and create a mini style guide.
      </Typography>
    </Box>
  );
};

export default Project5;
