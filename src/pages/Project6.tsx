import { Box, Typography, Divider, Chip } from '@mui/material';
import ColorPalette from './ColorPalette';

const Project6 = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3, maxWidth: '1100px', margin: 'auto' }}>
      {/* Title & Status */}
      <Typography variant="h3" component="h1" gutterBottom>
        AI Color Palette Generator
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Front-End / React / AI Integration
      </Typography>

      <Divider sx={{ my: 4 }} />

      <ColorPalette/>

      <Divider sx={{ my: 4 }} />

      {/* Project Description */}
      <Typography variant="h6" gutterBottom>
        Project Description
      </Typography>
      <Typography sx={{ mb: 2 }}>
        This is an AI-powered color palette generator that allows designers and developers to quickly
        generate color combinations based on user preferences. It was built as part of my personal portfolio
        to demonstrate skills in API integration, React, and user interface design.
      </Typography>

      <Typography variant="h6" gutterBottom>
        My Role
      </Typography>
      <Typography sx={{ mb: 2 }}>
        I designed and developed the tool from scratch using React and Material UI, with plans to integrate
        AI-based palette suggestions in the future.
      </Typography>

    </Box>
  );
};

export default Project6;
