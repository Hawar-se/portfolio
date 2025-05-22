import React from 'react';
import { Box, Typography, Link as MuiLink, Button } from '@mui/material';
import projectImg1 from '../assets/Gotogrowth.png';
import { ArrowForward } from '@mui/icons-material';

type ProjectCardProps = {
  title: string;
  link: string;
  shape?: string;
  image?: string;
  description?: string; // consider renaming to "description"
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image = projectImg1,
  description,
  link,
}) => {
  return (
    <MuiLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{
        display: 'block',
        textDecoration: 'none',
        width: 550,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        bgcolor: 'background.paper',
        color: 'text.primary',
        cursor: 'pointer',
        mx: 'auto',
      }}
    >
      {/* Header section with logo and title */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        {image && (
          <Box
            component="img"
            src={image}
            alt={`${title} logo`}
            sx={{
              width: 40,
              height: 40,
              objectFit: 'contain',
              borderRadius: 1,
              mr: 2,
            }}
          />
        )}
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>

      {/* Description section */}
      <Box sx={{ px: 2 }}>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      {/* Button */}
      <Box sx={{ textAlign: 'right', p: 2 }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForward />}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </Box>
    </MuiLink>
  );
};

export default ProjectCard;
