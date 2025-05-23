import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    }}
  >
    <Stack direction="row" spacing={4} justifyContent="center">
      <MuiLink href="https://www.linkedin.com/in/hawar-abdulwahid/" target="_blank" rel="noopener noreferrer" color="inherit">
        <FaLinkedin size={24} />
      </MuiLink>
      <MuiLink href="mailto:hawar-sevar@hotmail.com" color="inherit">
        <FaEnvelope size={24} />
      </MuiLink>
      <MuiLink href="https://github.com/Hawar-se" target="_blank" rel="noopener noreferrer" color="inherit">
        <FaGithub size={24} />
      </MuiLink>
    </Stack>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
      © {new Date().getFullYear()} Hawar Abdulwahid
    </Typography>
  </Box>
);

export default Footer;
