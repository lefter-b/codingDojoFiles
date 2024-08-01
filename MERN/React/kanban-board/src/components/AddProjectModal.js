import React from 'react';

const AddProjectModal = ({ show, onClose, onAdd, newName, onNameChange, newDueDate, onDueDateChange }) => {
  return (
    <div className={`modal ${show ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={newName}
          onChange={onNameChange}
        />
        <input
          type="date"
          value={newDueDate}
          onChange={onDueDateChange}
        />
        <button onClick={onAdd}>Add Project</button>
      </div>
    </div>
  );
};

export default AddProjectModal;
