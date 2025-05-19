import React from 'react';
import projectImg1 from '../assets/Gotogrowth.png';

type ProjectCardProps = {
  title: string;
  link: string;
  shape?: string; 
  image?: string;
  discription?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image = projectImg1,
  discription,

  link,
}) => {
  return (
    <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
    <div >
      {image && <img src={image} alt={`${title} logo`} className="project-logo" />}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{discription}</p>
        {/* <a href={link}>View Project</a> */}

      </div>
      {/* {shape && <img src={shape} alt={`${title} shape`} className="project-shape" />} */}

    </div>
    </a>
  );
};

export default ProjectCard;
