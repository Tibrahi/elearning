import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Playground = () => {
  const { language } = useParams();
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [noteName, setNoteName] = useState('');

  const handleSubmit = () => {
    if (currentNote.trim()) {
      if (!noteName.trim()) {
        showNotification('Please enter a note name!', 'error');
        return;
      }

      const noteObject = {
        name: noteName,
        content: currentNote
      };

      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = noteObject;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, noteObject]);
      }
      setCurrentNote('');
      setNoteName('');
      showNotification('Note saved successfully!');
    }
  };

  const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `cyber-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
  };

  const handleEdit = (index) => {
    setCurrentNote(notes[index].content);
    setNoteName(notes[index].name);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    showNotification('Note removed!');
  };

  return (
    <div className="cyber-container playground">
      <h1 className="cyber-glitch">{language.toUpperCase()} Playground</h1>
      <div className="note-name-input">
        <input
          type="text"
          value={noteName}
          onChange={(e) => setNoteName(e.target.value)}
          placeholder="Enter an epic note name..."
          className="cyber-input centered-input"
        />
      </div>
      <div className="playground-area">
        <div className="line-numbers">
          {currentNote.split('\n').map((_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder={`Start typing your ${language.toUpperCase()} notes here...`}
          className="cyber-textarea"
          spellCheck="false"
        />
      </div>
      <button onClick={handleSubmit} className="cyber-button save-button">
        {editIndex !== null ? 'Update Note' : 'Save Note'}
      </button>
      
      <div className="notes-display">
        <h2>Saved Notes</h2>
        {notes.map((note, index) => (
          <div key={index} className="note-box">
            <div className="note-header">
              <span className="note-number">{note.name}</span>
              <div className="note-actions">
                <button 
                  className="cyber-button copy"
                  onClick={() => {
                    navigator.clipboard.writeText(note.content);
                    showNotification('Code copied to clipboard!');
                  }}
                >
                  Copy
                </button>
                <button onClick={() => handleEdit(index)} className="cyber-button edit">
                  Edit
                </button>
                <button onClick={() => handleRemove(index)} className="cyber-button remove">
                  Remove
                </button>
              </div>
            </div>
            <pre className="note-content">{note.content}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playground;