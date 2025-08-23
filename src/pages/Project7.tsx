import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, List, ListItem, Divider } from '@mui/material';
import { ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Placeholder images
import HeroImg from '../assets/1.png';
import ChallengeImg from '../assets/A&G-Logo.png';
import RoleImg from '../assets/Bird.svg';
import SummaryImg from '../assets/Rose2.png';
import BeforeImg from '../assets/bg.jpg';
import AfterImg from '../assets/brid.png';

const ProjectGibotech = () => {
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
        UX/UI Design · Figma · React · Adobe Suite
      </Typography>

      {/* Hero Image */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 400, md: 600 }, mb: 4, overflow: 'hidden', borderRadius: 2 }}>
        <img src={HeroImg} alt="Gibotech Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* About the Project */}
      <Typography variant="h6" gutterBottom>
        About the Project
      </Typography>
      <Typography paragraph>
        Robotics and automation systems often overwhelm operators with unclear error messages. This project focuses on designing a clearer, user-friendly error handling interface that reduces downtime and operator stress.
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
            Operators often receive cryptic error codes with no context or guidance, which slows down troubleshooting and increases risk in critical hospital and industrial environments.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Role */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center', mb: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Role
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            UX/UI Designer
          </Typography>
        </Box>
        <Box sx={{ flex: 2, maxWidth: 600 }}>
          <img src={RoleImg} alt="Role Visual" style={{ width: '100%', borderRadius: 12 }} />
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
            I redesigned the error handling workflow to categorize alerts, translate technical messages into plain language, and provide recommended actions. This solution improves operator efficiency and reduces stress when handling robotics errors.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={SummaryImg} alt="Summary Illustration" style={{ width: '100%', borderRadius: 12 }} />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Before & After */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" gutterBottom>
          Before & After Comparison
        </Typography>
        <BeforeAfterSlider beforeImg={BeforeImg} afterImg={AfterImg} beforeLabel="Old Design" afterLabel="New Design" />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Responsibilities */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start', mb: 8 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            My Responsibilities
          </Typography>
          <List sx={{ pl: 0 }}>
            {[
              'Created wireframes and interactive Figma prototypes',
              'Redesigned error workflows and categorization',
              'Defined plain-language message guidelines',
              'Designed responsive layouts for desktop and mobile',
              'Ensured accessibility and usability for non-technical operators',
            ].map((text, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <FiberManualRecordIcon fontSize="small" sx={{ color: '#00ABAB' }} />
                </ListItemIcon>
                <ListItemText primary={text} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.6 } }} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <img src={RoleImg} alt="Responsibilities Visual" style={{ width: '100%', borderRadius: 12, border: '2px solid #00ABAB' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectGibotech;
