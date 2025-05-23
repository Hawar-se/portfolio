import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Divider } from '@mui/material';
import Image1 from '../assets/gtg-hero5.png';
import Image3 from '../assets/gtg-styl.jpg';
import Image4 from '../assets/q.jpg';
import Image5 from '../assets/gtg-service.png';

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
        GoToGrowth
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
      UX RESEARCH · UX DESIGN · UI DESIGN · USABILITY TEST
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
              GoToGrowth 
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
            src={Image4}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
        
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Challenge
          </Typography>
          <Typography>
            Go2Growth a startup focused on business growth and digital transformation, needed a cohesive brand identity and a professional website that reflected its mission, values, and unique service offerings. The design needed to balance clarity, approachability, and credibility for a diverse B2B audience.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" gutterBottom>
      🛠️ My Role & Responsibilities
    </Typography>
    <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
      <li>Co-founded the business and contributed to strategic direction</li>
      <li>Designed the full brand identity, including logo and visual assets</li>
      <li>Created print materials such as business cards and flyers</li>
      <li>Developed and launched a user-friendly website using One.com</li>
      <li>Designed all content and visuals in Figma</li>
      <li>Produced marketing materials consistent with the brand style</li>
      <li>Ensured cohesive branding across all physical and digital touchpoints</li>
    </ul>
  </Box>
  <Box sx={{ flex: 2 }}>
    <img
      src={Image3}
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
            I co-created the Go2Growth brand from the ground up. This included logo design,
            full brand identity, and planning the website content structure for intuitive navigation.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={Image5}
            alt="Project Summary Visual"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      </Box>

    </Box>
  );
};

export default Home;
