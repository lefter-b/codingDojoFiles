import React from 'react';

const ProjectItem = ({ project, onDelete, onStart, onMoveToCompleted }) => {
  const handleDelete = () => {
    onDelete(project._id);
  };

  const handleStart = () => {
    onStart(project._id);
  };

  const handleMoveToDone = () => {
    onMoveToCompleted(project._id);
  };

  return (
    <div className="project-item">
      <p>{project.name}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Status: {project.status}</p>
      <button onClick={handleStart}>Start Project</button>
      <button onClick={handleMoveToDone}>Move to Completed</button>
      <button onClick={handleDelete}>Remove Project</button>
    </div>
  );
};

export default ProjectItem;