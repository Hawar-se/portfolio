import meImage from '../assets/me.png';
import office from '../assets/office.jpg';
import Image1 from '../assets/Gotogrowth.png';
import Image2 from '../assets/n-logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';


const Home = () => {
  const projects = [
    {
      title: 'GoToGrowth',
      image: Image1,
      link: '/project1',
      discription: 'GoToGrowth website and Brand Identity --->',
    },
    {
      title: 'Nightingale.io',
      image: Image2,
      link: '/project2',
      discription: 'A UX case study for an AI-powered research assistant. --->',
    },
    // {
    //   title: 'Mobile First Project',
    //   image: Image3,
    //   link: '/project3',
    // },
    // {
    //   title: 'Todo App',
    //   image: Image3,
    //   link: '/project4',
    // },
  ];

  return (
    <div className="home">
      
      {/* Navigation */}
      <nav className="navbar">
      <div className="logo">Hawar</div>  
      <div className="nav-links">

  <Link to="/#projects">Projects</Link>
  <Link to="/#about">About</Link>
  </div>
</nav>
   
  {/* Hero Section */}
<div className="section">
  <div className="right">
    <img src={meImage} alt="Hawar" />
  </div>
  <div className="left">
    <h1 className="hero-intro">Hello, I'm Hawar. </h1>
    <h2 className="hero-name"></h2>
    <p className="hero-description">
      I am a passionate UI/UX designer and front-end developer.<br />
      I craft intuitive and engaging digital experiences with creativity and attention to detail.<br />
      Beyond skills, I bring positivity, adaptability, and a collaborative spirit to every project.<br />
      Let’s build something great together.
    </p>

    <Link to="/#about">Learn More</Link>

  </div>


</div>


      {/* Projects Section */}
      <div className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <Link to={project.link} key={index} className="project-link">
              <ProjectCard
                title={project.title}
                discription={project.discription}
                image={project.image} 
                link={''}/>
            </Link>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="section" id="about">
  <div className="right">
    <h2>Hi, I'm Hawar</h2>
    <p>
      I'm a UI/UX designer and front-end developer passionate about blending design with function. With a background in branding, marketing, and digital product design, I help turn ideas into intuitive, engaging user experiences.
    </p>
    <p>
      I’m curious, creative, and love solving complex problems through smart interfaces. Whether it's crafting a smooth user journey or designing bold visual identities — I build with empathy and precision.
    </p>
    <ul className="skills-list">
      <li>React</li>
      <li>Figma</li>
      <li>JavaScript</li>
      <li>Material UI</li>
      <li>Adobe Suite</li>
    </ul>
  </div>
  <div className="left">
    <img src={office} />
     </div>
     
       
      </div>
      <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/hawar-abdulwahid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:hawar-sevar@hotmail.com">
            <FaEnvelope size={30} />
          </a>
          <a href="https://github.com/Hawar-se">
            <FaGithub size={30} />
          </a>
        </div>
    </div>
  );
};

export default Home;
