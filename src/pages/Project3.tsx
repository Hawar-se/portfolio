import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Divider, Card, CardContent, Button } from '@mui/material';
import Image1 from '../assets/react.png'
import Image3 from '../assets/code-hero.jpg'

const Project5 = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3, maxWidth: '1100px', margin: 'auto' }}>
      {/* Back Link */}
         {/* Hero Section */}

            <Divider sx={{ mb: 4 }} />
      <Box sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" underline="none" color="primary">
          ← Back to Home
        </Link>
      </Box>

      {/* Page Title */}
      <Typography variant="h3" component="h1" gutterBottom>
        JavaScript & React Practice Projects
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        Skill Refresh · Frontend Development · Personal Practice
      </Typography>
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
                src={Image3}
                alt="Unicontrol Hero"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              
            </Box>

      {/* Introduction */}
      <Typography paragraph>
      </Typography>

      <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, mb: 5 }}>
              <Box sx={{ flex: 1 }}>
              <img
                  src={Image1}
                  alt="Project Summary Visual"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              </Box>
              
              <Box sx={{ flex: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Subject
                </Typography>
                <Typography>
                While actively applying my experience in UI/UX and frontend development, I took the initiative to refresh my core skills by building two mini-projects. These helped me reconnect with JavaScript fundamentals and React component logic. Below are the projects I built during this process.
                </Typography>
              </Box>
            </Box>

      {/* Project 1 - Vanilla JS CRUD */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Vanilla JavaScript CRUD App
          </Typography>
          <Typography paragraph>
            A simple Create, Read, Update, Delete application developed using pure JavaScript. It highlights my understanding of DOM manipulation, local storage, and core programming logic without relying on frameworks.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            href="https://github.com/Hawar-se/CRUD-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </Button>
        </CardContent>
      </Card>

      {/* Project 2 - React To-Do List */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            React To-Do List App
          </Typography>
          <Typography paragraph>
            A task management application built with React using functional components and hooks like <code>useState</code>. This project helped solidify my understanding of React’s component-driven approach and state management.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            href="https://github.com/Hawar-se/React-To-Do-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Project5;
