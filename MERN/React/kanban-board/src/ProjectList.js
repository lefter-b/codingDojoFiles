import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import AddProjectModal from './AddProjectModal';
import { getProjects, addProject, updateProject, deleteProject } from '../services/projectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAddProject = async () => {
    if (!newProjectName || !newDueDate) {
      alert('Project name and due date are required.');
      return;
    }

    try {
      const newProject = {
        name: newProjectName,
        dueDate: newDueDate,
        status: 'Todo', // Initial status
      };
      const addedProject = await addProject(newProject);
      setProjects([...projects, addedProject]);
      setNewProjectName('');
      setNewDueDate('');
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects(projects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleStartProject = async (projectId) => {
    try {
      const updatedProject = await updateProject(projectId, { status: 'In Progress' });
      updateProjectInList(updatedProject);
    } catch (error) {
      console.error('Error starting project:', error);
    }
  };

  const handleMoveToCompleted = async (projectId) => {
    try {
      const updatedProject = await updateProject(projectId, { status: 'Completed' });
      updateProjectInList(updatedProject);
    } catch (error) {
      console.error('Error moving project to completed:', error);
    }
  };

  const updateProjectInList = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project._id === updatedProject._id ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="project-list">
      <h2>Project Dashboard</h2>
      <button onClick={() => setShowAddModal(true)}>Add Project</button>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <div className="project-columns">
          <div className="column">
            <h3>Todo</h3>
            {projects
              .filter((project) => project.status === 'Todo')
              .map((project) => (
                <ProjectItem
                  key={project._id}
                  project={project}
                  onDelete={handleDeleteProject}
                  onStart={handleStartProject}
                  onMoveToCompleted={handleMoveToCompleted}
                />
              ))}
          </div>
          <div className="column">
            <h3>In Progress</h3>
            {projects
              .filter((project) => project.status === 'In Progress')
              .map((project) => (
                <ProjectItem
                  key={project._id}
                  project={project}
                  onDelete={handleDeleteProject}
                  onStart={handleStartProject}
                  onMoveToCompleted={handleMoveToCompleted}
                />
              ))}
          </div>
          <div className="column">
            <h3>Completed</h3>
            {projects
              .filter((project) => project.status === 'Completed')
              .map((project) => (
                <ProjectItem
                  key={project._id}
                  project={project}
                  onDelete={handleDeleteProject}
                  onStart={handleStartProject}
                  onMoveToCompleted={handleMoveToCompleted}
                />
              ))}
          </div>
        </div>
      )}
      <AddProjectModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddProject}
        newName={newProjectName}
        onNameChange={(e) => setNewProjectName(e.target.value)}
        newDueDate={newDueDate}
        onDueDateChange={(e) => setNewDueDate(e.target.value)}
      />
    </div>
  );
};

export default ProjectList;