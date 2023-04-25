import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{}</div>
      {projects.map(item  => {
        <ProjectItem key={item.id} name={projects.name} about={projects.about}/>
      })}
        
    </div>
  );
}

export default ProjectList;
