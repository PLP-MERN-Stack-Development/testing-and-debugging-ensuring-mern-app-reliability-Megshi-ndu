// frontend/src/components/BugForm.js
import React, { useState } from 'react';
import bugService from '../services/bugService';

function BugForm({ onBugAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }
    try {
      const response = await bugService.createBug({ title, description });
      onBugAdded(response.data);
      setTitle('');
      setDescription('');
      setError('');
    } catch (err) {
      setError('Failed to add bug.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report a New Bug</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Bug</button>
    </form>
  );
}

export default BugForm;
