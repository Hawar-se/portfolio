import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Divider, Chip } from '@mui/material';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';

// Placeholder images (replace these with your own)
import HeroImg from '../assets/gi.png';
import ChallengeImg from '../assets/ai.svg';
import SummaryImg from '../assets/gi-.png';


const ProjectGibotech = () => {
  // Responsibilities array for easy editing
  const responsibilities = [
    'Created wireframes and interactive Figma prototypes',
    'Redesigned error workflows and categorization',
    'Defined plain-language message guidelines',
    'Designed responsive layouts for desktop and mobile',
    'Ensured accessibility and usability for non-technical operators',
  ];

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
        Error Handling UX in Robotics Software
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        UX/UI Design · Figma · Adobe Suite
      </Typography>
      <Chip label="In Progress" color="warning" variant="outlined" sx={{ mb: 3 }} />

      <Box sx={{ position: 'relative', width: '100%', height: { xs: 400, md: 600 }, mb: 4, overflow: 'hidden', borderRadius: 2 }}>
        <img src={HeroImg} alt="Project Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* About the Project */}
      <Typography variant="h6" gutterBottom>
        About the Project
      </Typography>
      <Typography paragraph>
      Lab technicians process thousands of blood samples daily. The current process is complex, and it’s hard to quickly see urgent or problematic samples. A dashboard is needed to make the process more intuitive, clear, and safe.      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Technologies used:</strong>
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 4 }}>
        <FaFigma size={30} color="#F24E1E" title="Figma" />
        <SiAdobe size={30} color="#FF0000" title="Adobe Suite" />
        <FaReact size={30} color="#61DAFB" title="React" />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Challenge */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
        <Box sx={{ flex: 1 }}>
          <img src={ChallengeImg} alt="Challenge Visual" style={{ width: '100%', borderRadius: 12 }} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Challenge
          </Typography>
          <Typography>
          As I did not have access to Gibotech’s internal data, this case study is based on assumptions and general industry patterns in robotics software. The goal is to demonstrate my design approach rather than present a final production-ready solution.          </Typography>
        </Box>
      </Box>



      <Divider sx={{ mb: 4 }} />

      {/* Summary */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: 4, alignItems: 'center', mb: 5 }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography>
            Redesigned error handling workflow to categorize alerts, translate technical messages into plain language, and provide recommended actions, improving operator efficiency and reducing stress.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={SummaryImg} alt="Summary Illustration" style={{ width: '100%', borderRadius: 12 }} />
        </Box>
      </Box>
      <Divider sx={{ mb: 4 }} />
    </Box>
  );
};

export default ProjectGibotech;
