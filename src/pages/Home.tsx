import {
  Box,
  Typography,
  Button,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import meImage from '../assets/me.jpg';
import Image1 from '../assets/Gotogrowth.png';
import Image2 from '../assets/n-logo.png';
import Image3 from '../assets/u.png'
import Image4 from '../assets/heroimage.png';
import Image5 from '../assets/react.png'
import Image6 from '../assets/rosse.png'
import Image7 from '../assets/ai.svg';
import Image8 from '../assets/q.jpg'
import Image9 from '../assets/team-Bar.jpeg'
import ProjectCard from '../components/ProjectCard';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';



const Home = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projects = [
    {
      title: 'GoToGrowth',
      image: Image1,
      link: '/project1',
      description: 'GoToGrowth website and Brand Identity',
    },
    {
      title: 'Nightingale.io',
      image: Image2,
      link: '/project2',
      description: 'A UX case study for an AI-powered research assistant'
    },
    {
      title: 'Unicontrol Application',
      image: Image3,
      link: '/project4',
      description: 'Enhancing UX with a Responsive Redesign for Unicontrol',
    },
     {
      title: 'Skill Refresh Projects',
      image: Image5,
      link: '/project3',
      description: 'JavaScript & React Practice Projects',
    },
    
      {
        title: 'Upcoming Project',
        image: Image6,
        link: '/project5',
        description: 'A&G Logo Design – a bold and minimal brand identity project in progress.',
      },
      {
        title: 'AI',
        image: Image7,
        link: '/project6',
        description: 'AI Color Palette Generator',
      },
      {
        title: 'Gibotech',
        image: Image7,
        link: '/project7',
        description: 'UX in Robotics Software',
      },
    ];
      

  return (
<Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
<Fade in={true} timeout={1000}>
  
  <Box
    sx={{
      maxWidth: 1200,
      height:'100%',
      mx: 'auto',
      mb: 10,
      px: { xs: 3, md: 10 },
      py: { xs: 4, md: 2 },
      borderRadius: 2,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      gap: 6,
      position: 'relative',
      overflow: 'hidden',
      bgcolor: 'background.paper',
      color: 'text.primary',
    }}
  >
    {/* Animated background blob */}
    <Box
      sx={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '10%',
        zIndex: 0, 
      }}
    />


    {/* Text Section */}
    <Box sx={{ width: { xs: '100%', md: '50%' }, zIndex: 1 }}>
      <Typography
        variant={isMdUp ? 'h2' : 'h3'}
        gutterBottom
        sx={{
          letterSpacing: '0.05em',
          mb: 3,
          lineHeight: 1.25,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        Hi! I’m Hawar, Graphic & UX Designer with Frontend Development Skills


      </Typography>


      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          lineHeight: 1.7,
          mb: 4,
          fontSize: { xs: '1rem', md: '1.1rem' },
          fontFamily: '"Inter", sans-serif',
        }}
      >
UI/UX Designer & Frontend Developer, crafting intuitive, accessible UIs and exploring the future of design with tools like AI-powered palette generators        </Typography>

      <Link smooth to="/#about" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.75,
            fontWeight: 'bold',
            fontSize: { xs: '0.875rem', md: '1rem' },
            borderRadius: 999,
            boxShadow: 3,
            textTransform: 'none',
          }}
        >
Contact Me
        </Button>
      </Link>
      <Link smooth to="project6" style={{ textDecoration: 'none' }}>
  <Button
    variant="outlined"
    size="large"
    sx={{
      px: 5,
      py: 1.75,
      fontWeight: 'bold',
      fontSize: { xs: '0.875rem', md: '1rem' },
      borderRadius: 999,
      boxShadow: 2,
      textTransform: 'none',
      ml: 2,
    }}
  >
        Try AI Color Palette Generator
  </Button>
</Link>

    </Box>

    {/* Profile Image */}
    <Box
      component="img"
      src={meImage}
      alt="Hawar"
      sx={{
        width: { xs: '100%', md: '50%' },
        maxWidth: 350,
        borderRadius:'10%',
        objectFit: 'cover',
        boxShadow: '0 10px 40px rgba(248, 185, 185, 0.1)',
        transition: 'transform 0.4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        zIndex: 1,
      }}
    />
  </Box>
</Fade>

      {/* Projects Section */}
      <Box id="projects" sx={{ mb: 10 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          My Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
  {projects.map((project, index) => (
    <Grid item xs={12} sm={8} md={6} key={index}>
      <Box sx={{ position: 'relative' }}>
        <Link to={project.link} style={{ textDecoration: 'none' }}>
          <ProjectCard
            title={project.title}
            description={project.description} 
            image={project.image}
            link={project.link}
          />
        </Link>
      
      </Box>
    </Grid>
  ))}
</Grid>
      </Box>
            {/* About Section */}

            <Box
  id="about"
  sx={{
    maxWidth: 1200,
    mx: 'auto',
    mb: 10,
    px: 3,
    py: 6,
    bgcolor: 'background.paper',
    borderRadius: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: 4,
  }}
>
  {/* Image Section */}
  <Box
    component="img"
    src={Image9}
    alt="Hawar"
    sx={{
      width: { xs: '100%', md: '40%' },
      maxHeight: 1000,
      borderRadius: 2,
      objectFit: 'cover',
    }}
  />
  

  {/* Text Section */}
  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      About Me
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem', mb: 2 }}
    >
      I’m Hawar, a passionate UI/UX designer and front-end developer who loves crafting
      intuitive, accessible, and visually engaging digital experiences. I specialize in building
      responsive, user-friendly interfaces using tools like <strong>Figma, Adobe XD, React, and Material UI</strong>.
      <br /><br />
      My design approach is rooted in <strong>clarity, accessibility, and simplicity</strong>. I believe that
      great digital products are not only functional but emotionally engaging — they anticipate user needs
      and create a sense of flow.
      freshing an established brand, I’m here to help bring your vision
      to life — beautifully and intuitively.
    </Typography>

    
  </Box>
  
</Box>

<Box
  id="about"
  sx={{
    maxWidth: 1200,
    mx: 'auto',
    mb: 10,
    px: 3,
    py: 6,
    bgcolor: 'background.paper',
    borderRadius: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: 4,
  }}
>

  

  {/* Text Section */}
  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
  

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem', mb: 2 }}
    >
      <br /><br />
      What sets me apart is my <strong>blend of design sensibility and technical skill</strong>. I bring a collaborative
      mindset to every project, whether I’m wireframing an idea, prototyping a flow, or coding the final experience.
      I’m deeply committed to continuous learning and love transforming abstract ideas into real, meaningful products.
      <br /><br />
      Whether you’re launching a fresh startup or re
    </Typography>

    
  </Box>
    {/* Image Section */}
    <Box
    component="img"
    src={Image8}
    alt="Hawar"
    sx={{
      width: { xs: '100%', md: '40%' },
      maxHeight: 1000,
      borderRadius: 2,
      objectFit: 'cover',
    }}
  />
</Box>


    <Box
  id="about"
  sx={{
    maxWidth: 1200,
    mx: 'auto',
    mb: 10,
    px: 3,
    py: 6,
    bgcolor: 'background.paper',
    borderRadius: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: 4,
  }}
>
  {/* Image Section */}
  <Box
    component="img"
    src={Image4}
    alt="Hawar"
    sx={{
      width: { xs: '100%', md: '40%' },
      maxHeight: 1000,
      borderRadius: 2,
      objectFit: 'cover',
    }}
  />
  
  {/* Text Section */}
  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
    Personal Interests    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem', mb: 2 }}
    >Beyond the screen, I find joy in nurturing my backyard garden and caring for my chickens, activities that
    bring me mindfulness and calm. Pilates keeps me centered, while volunteering at a local children’s swimming
    program reflects my belief in community support, learning, and shared growth.
  
    </Typography>
    <Button
      variant="outlined"
      color="primary"
      href="Hawar-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ fontWeight: 'bold' }}
    >
      Download CV
    </Button>
    
  </Box>
  
</Box>


    </Box>
    
  );
};

export default Home;