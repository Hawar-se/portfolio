// src/App.tsx
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // your MUI theme file
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Layout from './components/layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* MUI global styles */}
      <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
      </Route>
    </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

