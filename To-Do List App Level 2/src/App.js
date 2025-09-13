import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing a task
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save edited task
  const saveEdit = () => {
    if (editingText.trim() !== '') {
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, text: editingText.trim() } : task
      ));
    }
    setEditingId(null);
    setEditingText('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  // Handle Enter key press for adding tasks
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Handle Enter key press for editing tasks
  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 To-Do List</h1>
          <p>Stay organized and productive</p>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/ali-abdelazim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/aliabdelazim7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              🐙 GitHub
            </a>
          </div>
        </header>

        <div className="add-task-section">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="task-input"
            />
            <button onClick={addTask} className="add-btn">
              Add Task
            </button>
          </div>
        </div>

        <div className="tasks-section">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>No Tasks Yet</h3>
              <p>Add your first task above to get started!</p>
            </div>
          ) : (
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="task-checkbox"
                    />
                    
                    {editingId === task.id ? (
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyPress={handleEditKeyPress}
                        onBlur={saveEdit}
                        className="edit-input"
                        autoFocus
                      />
                    ) : (
                      <span 
                        className="task-text"
                        onDoubleClick={() => startEditing(task.id, task.text)}
                      >
                        {task.text}
                      </span>
                    )}
                  </div>

                  <div className="task-actions">
                    {editingId === task.id ? (
                      <div className="edit-actions">
                        <button onClick={saveEdit} className="save-btn" title="Save">
                          ✓
                        </button>
                        <button onClick={cancelEdit} className="cancel-btn" title="Cancel">
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="task-buttons">
                        <button 
                          onClick={() => startEditing(task.id, task.text)}
                          className="edit-btn"
                          title="Edit task"
                        >
                          ✏️
                        </button>
                        <button 
                          onClick={() => deleteTask(task.id)}
                          className="delete-btn"
                          title="Delete task"
                        >
                          🗑️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {tasks.length > 0 && (
          <div className="stats">
            <p>
              Total: {tasks.length} | 
              Completed: {tasks.filter(task => task.completed).length} | 
              Remaining: {tasks.filter(task => !task.completed).length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
