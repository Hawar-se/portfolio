import { Link } from 'react-router-dom';


const Project1 = () => {
  return (
    <div className="project-container">
      <div className="p-card1">
      <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>
        <h1 className="project-title">GoToGrowth Project Entry</h1>

        <section className="project-section">
          <h2>Project:</h2>
          <div className="project-content">
            <p>Go2Growth Website & Brand Identity</p>
            <img src="../assets/Gotogrowth.png" alt="Go2Growth Project" className="project-image" />
          </div>
        </section>

        <div className="project-section">
          <h2>Role:</h2>
          <p>Brand Designer & WordPress Website Creator</p>
        </div>

        <div className="project-section">
          <h2>Summary:</h2>
          <p>
            I co-created the Go2Growth brand from the ground up. My work included the logo
            design, complete brand identity, and the layout and content structure of the company’s
            website using WordPress.
          </p>
        </div>

        <div className="project-section">
          <h2>My Responsibilities:</h2>
          <ul>
            <li>Designed the logo and visual identity (colors, typography, style guide)</li>
            <li>Built all website pages using WordPress (Home, Services, Our Story, etc.)</li>
            <li>Focused on clear structure, intuitive navigation, and strong visual presentation</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Tools Used:</h2>
          <p>Adobe Illustrator, WordPress, Photoshop, Canva</p>
        </div>

        <div className="project-section">
          <h2>Link:</h2>
          <ul>
            <li>
              <a href="https://gotogrowth.dk" target="_blank" rel="noopener noreferrer">
                Visit GoToGrowth Website
              </a>
            </li>
            <li>Screenshots of logo, design samples, web page layout (to be added)</li>
            <li><img/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project1;
