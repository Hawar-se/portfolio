import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Divider, Tabs, Tab, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaFigma, FaWordpress } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';

import Image1 from '../assets/gtg-hero5.png';
import Image3 from '../assets/gtg-styl.jpg';
import Image4 from '../assets/q.jpg';
import Image5 from '../assets/gtg-service.png';
import { useRef } from 'react';

const MotionBox = motion(Box);

const sections = [
  { id: 'hero', label: 'UX Research' },
  { id: 'about', label: 'UX Design' },
  { id: 'role', label: 'UI Design' },
  { id: 'summary', label: 'Usability Test' },
];

const Home = () => {
  const theme = useTheme();
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Clear styles and apply active style to clicked tab
  const handleTabClick = (index: number, sectionId: string) => {
    // Reset all tabs styles
    tabsRef.current.forEach(tab => {
      if (tab) {
        tab.style.color = '';
        tab.style.fontWeight = '';
      }
    });

    // Apply styles to clicked tab
    const clickedTab = tabsRef.current[index];
    if (clickedTab) {
      clickedTab.style.color = theme.palette.primary.main;
      clickedTab.style.fontWeight = '500';
    }

    // Scroll to section smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3, maxWidth: '1100px', margin: 'auto' }}>
      {/* Back Link */}
      <Box sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" underline="none" color="primary">
          ← Back to Home
        </Link>
      </Box>

      {/* Hero Section */}
      <MotionBox
        id="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          GoToGrowth
        </Typography>

        {/* Navigation Tabs */}
        <Tabs value={false} sx={{ mb: 4 }}>
          {sections.map((section, idx) => (
            <Tab
              key={section.id}
              label={section.label}
              onClick={() => handleTabClick(idx, section.id)}
              ref={el => (tabsRef.current[idx] = el)}
              sx={{     textTransform: 'none',
                mx: 1,
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
            }}
            />
          ))}
        </Tabs>
      </MotionBox>

      {/* Hero Image with Overlay */}
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
        <Box
          component="img"
          src={Image1}
          alt="Unicontrol Hero"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
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
          <Typography variant="h6">UI/UX Design · Figma · Wireframing</Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* About the Project */}
      <Box
        id="about"
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}
      >
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            About the Project
          </Typography>
          <Typography>
            GoToGrowth is a portfolio project showcasing my work as a UI/UX designer and co-founder of a startup focused on helping businesses grow through digital
            transformation. I worked on everything from brand identity and web content planning to marketing material creation and UX strategy.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 4 }}>
          <strong>Technologies used:</strong>
          <FaFigma size={30} color="#F24E1E" title="Figma" />
          <SiAdobe size={30} color="#FF0000" title="Adobe Suite" />
          <FaWordpress size={30} color="#21759B" title="WordPress" />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Role & Challenge Section */}
      <Box
        id="role"
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={Image3}
            alt="Project Summary Visual"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Challenge
          </Typography>
          <Typography>
            Go2Growth, a startup focused on business growth and digital transformation, needed a cohesive brand identity and a professional website that reflected its
            mission, values, and unique service offerings. The design needed to balance clarity, approachability, and credibility for a diverse B2B audience.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* My Role & Responsibilities */}
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
            <li>Managed a small team of marketing researchers and coordinated timelines, roles, and deliverables</li>
          </ul>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Box
            component="img"
            src={Image5}
            alt="Project Summary Visual"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Summary Section */}
      <Box
        id="summary"
        sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: 4, alignItems: 'center', mb: 5 }}
      >
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography>
            I co-created the Go2Growth brand from the ground up. This included logo design, full brand identity, and planning the website content structure for intuitive
            navigation. I also managed a small team of marketing researchers and coordinated timelines, roles, and deliverables.
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
            Tools Used: Figma, Adobe Photoshop, Illustrator, One.com
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={Image4}
            alt="Project Summary Visual"
            sx={{
              width: '100%',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
