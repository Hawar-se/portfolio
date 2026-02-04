import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import projectImg1 from '../assets/Gotogrowth.png';

type ProjectCardProps = {
  title: string;
  link: string; // example: "project1"
  image?: string;
  description?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image = projectImg1,
  description,
  link,
}) => {
  return (
    <Box
      sx={{
        width: {
          xs: 320,   // mobile
          sm: 360,   // small tablets
          md: 400,   // desktop
          lg: 420,   // large screens
        },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        bgcolor: 'background.paper',
        color: 'text.primary',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 6,
          },
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: 40,
            height: 40,
            objectFit: 'contain',
            borderRadius: 1,
            flexShrink: 0,
          }}
        />
        <Typography variant="h6">{title}</Typography>
      </Box>

      {/* Description */}
      {description && (
        <Box sx={{ px: 2, flexGrow: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      )}

      {/* Action */}
      <Box sx={{ p: 2 }}>
        <Button
          component={RouterLink}
          to={`/${link}`}
          variant="outlined"
          endIcon={<ArrowForward />}
          fullWidth
        >
          View Project
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
