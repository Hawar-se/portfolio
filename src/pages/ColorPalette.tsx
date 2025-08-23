import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

// Simple palette generator (replace with your real generator or API)
const generatePalette = (): string[] => {
  const randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return Array(5).fill(0).map(() => randomColor());
};

const ColorPalette = () => {
  const [colors, setColors] = useState<string[]>(generatePalette());
  const [exportOpen, setExportOpen] = useState(false);

  const cssVariables = colors
    .map((color, i) => `  --color-${i + 1}: ${color};`)
    .join('\n');

  // Function to download CSS variables as a .css file
  const downloadCSS = () => {
    const cssContent = `:root {\n${cssVariables}\n}`;
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'palette.css';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Your Color Palette
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        {colors.map((color, i) => (
          <Box
            key={i}
            sx={{
              width: 60,
              height: 60,
              bgcolor: color,
              borderRadius: 1,
              boxShadow: 2,
              border: '1px solid #ccc',
            }}
            title={color}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={() => setColors(generatePalette())}
        sx={{ mr: 2 }}
      >
        Generate New Palette
      </Button>

      <Button variant="outlined" onClick={() => setExportOpen(true)} sx={{ mr: 2 }}>
        Export as CSS
      </Button>

      <Button variant="outlined" onClick={downloadCSS}>
        Download CSS File
      </Button>

      <Dialog open={exportOpen} onClose={() => setExportOpen(false)}>
        <DialogTitle>CSS Variables</DialogTitle>
        <DialogContent>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'monospace',
              backgroundColor: '#f4f4f4',
              padding: '1em',
              borderRadius: '4px',
            }}
          >
            {`:root {\n${cssVariables}\n}`}
          </pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExportOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ColorPalette;
