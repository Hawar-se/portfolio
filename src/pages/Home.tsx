import { Box, Typography, Button, Grid, Fade } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';

import meImage from '../assets/me.jpg';
import Image1 from '../assets/Gotogrowth.png';
import Image2 from '../assets/n-logo.png';
import Image3 from '../assets/u.png';
import Image4 from '../assets/heroimage.png';
import Image5 from '../assets/react.png';
import Image6 from '../assets/rosse.png';
import Image7 from '../assets/ai.svg';
import Image10 from '../assets/Rose.png';
import Image9 from '../assets/team-Bar.jpeg';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const projects = [
    { title: 'GoToGrowth', image: Image1, link: 'project1', description: 'GoToGrowth website and Brand Identity' },
    { title: 'Nightingale.io', image: Image2, link: 'project2', description: 'UX case study for AI research assistant' },
    { title: 'Unicontrol Application', image: Image3, link: 'project4', description: 'Responsive UX redesign' },
    { title: 'Skill Refresh Projects', image: Image5, link: 'project3', description: 'JavaScript & React practice' },
    { title: 'Upcoming Project', image: Image6, link: 'project5', description: 'Logo & brand identity project' },
    { title: 'AI Color Tool', image: Image7, link: 'project6', description: 'AI color palette generator' },
    { title: 'Gibotech', image: Image10, link: 'project7', description: 'UX for robotics software' },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>

      {/* HERO */}
      <Fade in timeout={800}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            p: { xs: 3, md: 6 },
            mb: 10,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Designing interfaces that make sense for users and developers
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
              I’m a UI/UX designer focused on web and application layouts,
              wireframes, and redesigns, with hands-on frontend experience.
              I also create supporting visual materials such as logos and
              marketing assets when needed.
            </Typography>

            <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2,
    width: '100%',
    maxWidth: 420, // optional, keeps things tidy
  }}
>
  <HashLink smooth to="#about" style={{ textDecoration: 'none', flex: 1 }}>
    <Button variant="contained" fullWidth>
      Contact Me
    </Button>
  </HashLink>

  <Button
    component={RouterLink}
    to="/project6"
    variant="outlined"
    fullWidth
    sx={{ flex: 1 }}
  >
    Try AI Tool
  </Button>
</Box>

          </Box>

          <Box
            component="img"
            src={meImage}
            alt="Hawar"
            sx={{
              width: '100%',
              maxWidth: 320,
              borderRadius: 3,
            }}
          />
        </Box>
      </Fade>

      {/* PROJECTS */}
      <Box id="projects" sx={{ maxWidth: 1200, mx: 'auto', mb: 10 }}>
        <Typography variant="h4" textAlign="center" mb={4}>
          My Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ABOUT */}
      {/* <Box
        id="about"
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          mb: 10,
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          bgcolor: 'background.paper',
          borderRadius: 3,
        }}
      >
        <Box
          component="img"
          src={Image9}
          alt="About"
          sx={{ width: { xs: '100%', md: '40%' }, borderRadius: 3 }}
        />

        <Box>
          <Typography variant="h4" mb={2}>
            About Me
          </Typography>
          <Typography color="text.secondary">
            I’m Hawar, a UI/UX designer who values clarity, accessibility,
            and realistic design systems. I work mainly in Figma and collaborate
            closely with developers thanks to my frontend background.
          </Typography>
        </Box>
      </Box> */}

      {/* INTERESTS */}
      <Box id="about"
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          bgcolor: 'background.paper',
          borderRadius: 3,
        }}
      >
        <Box
          component="img"
          src={Image4}
          alt="Interests"
          sx={{ width: { xs: '100%', md: '40%' }, borderRadius: 3 }}
        />

        <Box>
          <Typography variant="h4" mb={2}>
            Personal Interests
          </Typography>
          <Typography color="text.secondary" mb={2}>
            Gardening, Pilates, volunteering with children, and community engagement.
          </Typography>

          <Button variant="outlined" href="Hawar-cv.pdf" target="_blank">
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
