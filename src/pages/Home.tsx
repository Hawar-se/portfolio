import {
  Box,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Avatar,
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import meImage from '../assets/me.jpg';
import Image4 from '../assets/me.png';
import Image1 from '../assets/Gotogrowth.png';
import Image2 from '../assets/n-logo.png';
import Image3 from '../assets/u.png'
import Image5 from '../assets/react.png'
import ProjectCard from '../components/ProjectCard';


const Home = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
      description: 'GoToGrowth website and Brand Identity',
    },
     {
      title: 'Skill Refresh Projects',
      image: Image5,
      link: '/project3',
      description: 'GoToGrowth website and Brand Identity',
    },
  ];

  return (
<Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
{/* Navbar */}
      <Box
        component="nav"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: theme.zIndex.appBar,
          bgcolor: 'background.paper',
          boxShadow: theme.shadows[3],
          px: 3,
          py: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ letterSpacing: 1 }}>
          Hawar
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link smooth to="/#projects" style={{ textDecoration: 'none' }}>
            <Button variant="text" size="large" color="primary">
              Projects
            </Button>
          </Link>
          <Link smooth to="/#about" style={{ textDecoration: 'none' }}>
            <Button variant="text" size="large" color="primary">
              About
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* Hero Section */}
<Grid
  container
  spacing={6}
  alignItems="center"
  sx={{
    mt: 0,
    mb: 8,
    flexDirection: { xs: 'column-reverse', md: 'row' },
    minHeight: { md: '100vh' }, // Full viewport height on md+
  }}
>
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        maxWidth: 600,
        mx: { xs: 'auto', md: 0 },
        textAlign: { xs: 'center', md: 'left' },
        px: { xs: 2, md: 0 },
        py: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant={isMdUp ? 'h1' : 'h3'}  
        fontWeight="bold"
        gutterBottom
        sx={{ letterSpacing: 2, mb: 4, lineHeight: 1.2 }}
      >
        Hi! I’m Hawar and I turn ideas into interactive, responsive websites that people love to use.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.8, mb: 4, fontSize: { xs: '1rem', md: '1.125rem' } }}
      >
       UI/UX-focused front-end developer passionate about clean code and clean design.
I blend technical expertise with design intuition to craft user-centered web experiences.
Let’s build something that not only works great, but feels great to use.
      </Typography>
      <Link smooth to="/#about" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="large"
          sx={{ px: 5, py: 1.75, fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1rem' } }}
        >
          Learn More
        </Button>
      </Link>
    </Box>
  </Grid>
  <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
  <Box
  component="img"
  src={meImage}
  alt="Hawar"
  sx={{
    width: { xs: 300, md: 400 },   // bigger on desktop
    height: { xs: 400, md: 700 },
    mx: 'auto',
    boxShadow: theme.shadows[8],
    borderRadius: 2,               // optional: add some rounded corners if you want
    objectFit: 'cover',            // make sure the image covers the box nicely
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.07)',
    },
  }}
/>

  </Grid>
</Grid>

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
            description={project.description} // typo fixed below
            image={project.image}
            link={project.link}
          />
        </Link>
      
      </Box>
    </Grid>
  ))}
</Grid>
      {/* About Section */}

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
    boxShadow: theme.shadows[3],
    borderRadius: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: 4,
  }}
>
  {/* Image on the left */}
  <Box
    component="img"
    src={Image4}
    alt="Hawar"
    sx={{
      width: { xs: '100%', md: '50%' },
      maxHeight: 1000,
      borderRadius: 2,
      boxShadow: theme.shadows[4],
      objectFit: 'cover',
    }}
  />

  {/* Text on the right */}
  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      About Me
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem' }}
    >
      I’m Hawar, a passionate UI/UX designer and front-end developer who loves crafting
      intuitive, engaging digital experiences. With a strong eye for detail and creativity,
      I build responsive websites that users enjoy interacting with.<br /><br />
      I believe that great design goes hand in hand with great functionality. Beyond my
      technical skills, I bring a positive, adaptable, and collaborative approach to every
      project I work on.<br /><br />
      Whether it’s a fresh startup idea or an established brand needing a boost, I’m excited
      to help turn concepts into reality. Let’s create something impactful together.
    </Typography>
      {/* New personal text + CV link */}
      <Typography variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
      Outside of work, I’m passionate about continuous learning, exploring new technologies, and collaborating with diverse teams.
      Feel free to check out my CV for more about my experience and skills.
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
    🌿 Personal Interests
Beyond coding, I find joy in nurturing my backyard garden and caring for my chickens, activities that instill a sense of responsibility and mindfulness. Pilates sessions keep me grounded and focused, enhancing my overall well-being. Additionally, I volunteer at a local swimming program for children, where I assist in teaching and supervising, reflecting my commitment to community engagement and teamwork.
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

{/* Contact Icons */}
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    gap: 6,
    mt: 4,
    mb: 4,
    color: theme.palette.text.primary,
  }}
>
  <MuiLink
    href="https://www.linkedin.com/in/hawar-abdulwahid/"
    target="_blank"
    rel="noopener noreferrer"
    color="inherit"
    sx={{
      transition: 'color 0.3s',
      '&:hover': { color: theme.palette.primary.main },
    }}
  >
    <FaLinkedin size={36} />
  </MuiLink>
  <MuiLink
    href="mailto:hawar-sevar@hotmail.com"
    color="inherit"
    sx={{
      transition: 'color 0.3s',
      '&:hover': { color: theme.palette.primary.main },
    }}
  >
    <FaEnvelope size={36} />
  </MuiLink>
  <MuiLink
    href="https://github.com/Hawar-se"
    target="_blank"
    rel="noopener noreferrer"
    color="inherit"
    sx={{
      transition: 'color 0.3s',
      '&:hover': { color: theme.palette.primary.main },
    }}
  >
    <FaGithub size={36} />
  </MuiLink>
</Box>
    </Box>
  );
};

export default Home;
