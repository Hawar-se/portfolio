import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Layout from './components/layout';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import Project7 from './pages/Project7';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="project5" element={<Project5 />} />
        <Route path="project6" element={<Project6 />} />
        <Route path="project7" element={<Project7 />} />
        

      </Route>
    </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

