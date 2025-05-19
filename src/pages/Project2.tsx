import { Link } from 'react-router-dom';
import Image1 from '../assets/n-hero.png';

const Project2 = () => {
  return (
      <div className="p-card1">
        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>

      <h1 className="project-title">Nightinggale.io
      </h1>
      <h2 className="n-subtitle">
      Angular - Tailwind - Figma - USABILITY TEST  </h2>
      
      {/* <!-- Hero --> */}
      <div className="hero-image" style={{ width: '100%', height: '700px' }}>
  <img src={Image1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>

        <div className="project-section">
          <h2>Role:</h2>
          <p>UX Designer & Front-end Contributor (Angular)</p>
        </div>

        <div className="project-section">
          <h2>Summary:</h2>
          <p>
            I led the redesign of a core feature within Nightingale.io, a complex web-based
            distribution and publishing application. The focus was on creating a streamlined and
            user-friendly workflow for adding new titles to the platform — an area that was
            previously confusing due to high technical complexity and legacy logic.
          </p>
        </div>

        <div className="project-section">
          <h2>My Responsibilities:</h2>
          <ul>
            <li>Mapped the existing title-creation process and identified user pain points</li>
            <li>Designed new workflows and improved UX flow with low- to high-fidelity wireframes</li>
            <li>Created Figma prototypes to demonstrate new interaction paths and logic</li>
            <li>Worked closely with Angular developers to implement the redesigned workflow</li>
            <li>Ensured UX consistency across components and handled responsive behavior</li>
          </ul>
        </div>


       
      </div>
  );
};

export default Project2;
