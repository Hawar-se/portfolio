import { Link } from 'react-router-dom';
import Image5 from '../assets/gtg-hero5.png';

const Home = () => {
 

  return (
    <div className="p-card1">
        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>

      <h1 className="project-title">GoToGrowth
      </h1>
      <h2 className="project-subtitle">
      UX RESEARCH - UX DESIGN - UI DESIGN - USABILITY TEST  </h2>
      
      {/* <!-- Hero --> */}
      <div className="hero-image" style={{ width: '100%', height: '700px' }}>
      <img src={Image5} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       </div>


      {/* <!-- Roles & Summary --> */}
      <div className="project-section">
        <h2>Role:</h2>
        <p>Brand Designer & WordPress Website Creator</p>
      </div>

      <div className="project-section">
        <h2>Summary:</h2>
        <p>I co-created the Go2Growth brand from the ground up. This included logo design, full brand identity, and planning the website content structure for intuitive navigation.</p>
      </div>

      {/* <!-- Screenshots Gallery --> 
      <div className="project-section">
        <h2>Screenshots:</h2>
        <div className="screenshot-gallery">
          <img src="assets/q.jpg" alt="Screenshot 1" />
          <img src="assets/g2g-team.jpg" alt="Screenshot 2" />
          <img src="assets/1.png" alt="Screenshot 3" />
          <img src="assets/gtg-styl.jpg" alt="Screenshot 4" />
          <img src="assets/gtg-card.jpg" alt="Screenshot 5" />
          <img src="assets/gtg-prototype.png" alt="Screenshot 6" />
        </div>
      </div>
      */}

      <div className="project-section">
        <h2>My Responsibilities:</h2>
        <ul>
          <li>Created brand logo, typography, and visual design system</li>
          <li>Designed & developed the website in WordPress (incl. responsiveness)</li>
          <li>Defined page layout for all main sections (Home, Services, Our Story, Contact)</li>
          <li>Ensured accessibility, branding consistency, and modern UI</li>
        </ul>
      </div>

    
    </div>
  );
};

export default Home;
