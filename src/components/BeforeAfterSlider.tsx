import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { Box, Typography, Grid } from '@mui/material';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg, beforeLabel, afterLabel }) => {
  return (
    <Box sx={{ my: 6 }}>
      <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="subtitle1">{beforeLabel}</Typography>
        <Typography variant="subtitle1">{afterLabel}</Typography>
      </Grid>
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <ReactCompareImage
          leftImage={beforeImg}
          rightImage={afterImg}
          sliderLineColor="#1976d2"
          handleSize={40}
        />
      </Box>
    </Box>
  );
};

export default BeforeAfterSlider;
