import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, List, ListItem, Divider } from '@mui/material';
import Image1 from '../assets/n-hero.png';
import Image6 from '../assets/n-p2.png';
import Image7 from '../assets/n-logo.png';
import Image8 from '../assets/oldcat.png';
import Image9 from '../assets/new-cata.png';
import Image10 from '../assets/old-title.png';
import Image11 from '../assets/new-title.png';
import Image12 from '../assets/dis.png';
import Image13 from '../assets/ex.png';
import { ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Project2 = () => {
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
        Regenarate Title Creation
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        Angular Development . Design System · UI Design· Figma
      </Typography>

      {/* Hero Image Section */}
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
          alt="EcoCycle Hero"
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
            Nightengale.io
          </Typography>
          <Typography variant="h6">
            Improving UX Title ctration Through Intuitive Design
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* About the Project */}
      <Typography variant="h6" gutterBottom>
        About the Project
      </Typography>
      <Typography paragraph>
        Nightingale is a user-centered project designed to improve digital experiences through thoughtful UX and intuitive UI design.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Technologies used:</strong>
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 4 }}>
        <FaFigma size={30} color="#F24E1E" title="Figma" />
        <SiAdobe size={30} color="#FF0000" title="Adobe Suite" />
        <FaReact size={30} color="#61DAFB" title="React" />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Challenge Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
        <Box sx={{ flex: 1 }}>
          <img
            src={Image6}
            alt="Project Logo"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>

        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Challenge:
          </Typography>
          <Typography>
            Nightingale.io's audiobook publishing platform had a complex and inconsistent logic for creating and distributing audiobook titles. This complexity affected both the user experience and the internal workflows of publishers.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

     {/* Role Section */}
<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 4,
    alignItems: 'center',
    mb: 6,
  }}
>
  {/* Left: Role Text */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
      Role
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        color: 'text.secondary',
        fontSize: '1rem',
        lineHeight: 1.6,
      }}
    >
      UX Designer & Front-end Developer (Angular)
    </Typography>
  </Box>

  {/* Right: Image */}
  <Box
    sx={{
      flex: 2,
      width: '100%',
      maxWidth: 600,
      borderRadius: 3,
      overflow: 'hidden',
      boxShadow: 3,
    }}
  >
    <img
      src={Image12}
      alt="Role Visual"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        borderRadius: 12,
      }}
    />
  </Box>
</Box>


      <Divider sx={{ mb: 4 }} />

      {/* Summary Section */}
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
            src={Image13}
            alt="Summary Illustration"
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Before and After Comparison */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" gutterBottom>
          Before & After Comparison
        </Typography>
        <BeforeAfterSlider
          beforeImg={Image8}
          afterImg={Image9}
          beforeLabel="Old Design"
          afterLabel="New Design"
        />
         <BeforeAfterSlider
          beforeImg={Image10}
          afterImg={Image11}
          beforeLabel="Old Design"
          afterLabel="New Design"
        />
      </Box>

      <Divider sx={{ mb: 4 }} />

{/* Responsibilities */}
<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start', mb: 8 }}>
  {/* Left: Responsibilities List */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
      My Responsibilities
    </Typography>
    <List sx={{ pl: 0 }}>
      {[
        'Developed interactive Figma prototypes for user testing and stakeholder presentations',
        'Collaborated with React developers to implement UI components',
        'Conducted user interviews and mapped user journeys to identify pain points',
        'Designed responsive layouts with accessibility considerations',
        'Implemented gamification elements to boost user engagement',
      ].map((text, index) => (
        <ListItem key={index} disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <FiberManualRecordIcon fontSize="small" sx={{ color: '#00ABAB' }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.6 } }}
            primary={text}
          />
        </ListItem>
      ))}
    </List>
  </Box>

  {/* Right: Image */}
  <Box sx={{ flex: 1, maxWidth: 500 }}>
    <img
      src={Image7}
      alt="Responsibilities Visual"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: 12,
        border: '2px solid #00ABAB',
      }}
    />
  </Box>
</Box>

    </Box>
  );
};

export default Project2;
