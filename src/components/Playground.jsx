import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import './Playground.css';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 animate-pulse">
            {language.toUpperCase()} Playground
          </h1>
          <p className="text-xl text-cyan-400 font-light tracking-wider">
            Your Digital Code Sanctuary
          </p>
        </div>

        {/* Main Editor Section */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-cyan-500/30 p-6 mb-8 shadow-lg shadow-cyan-500/10">
          <div className="mb-6">
            <input
              type="text"
              value={noteName}
              onChange={(e) => setNoteName(e.target.value)}
              placeholder="Enter an epic note name..."
              className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex mb-6">
            <div className="bg-gray-900/50 p-3 border-r border-cyan-500/30 text-gray-500 font-mono text-sm">
              {currentNote.split('\n').map((_, i) => (
                <div key={i} className="select-none">{i + 1}</div>
              ))}
            </div>
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder={`Start typing your ${language.toUpperCase()} notes here...`}
              className="flex-1 min-h-[200px] p-3 bg-gray-900/50 border border-cyan-500/30 rounded-r-lg text-gray-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent resize-y"
              spellCheck="false"
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg ${
              editIndex !== null
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
            }`}
          >
            {editIndex !== null ? 'Update Note' : 'Save Note'}
          </button>
        </div>

        {/* Notes Collection Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
            Your Code Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-cyan-500/30 overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="p-4 bg-gray-900/50 border-b border-cyan-500/30 flex justify-between items-center">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-semibold text-white">
                    {note.name}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(note.content);
                        showNotification('Code copied to clipboard!');
                      }}
                      className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Copy"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-gray-100 font-mono text-sm overflow-x-auto max-h-[300px]">
                  {note.content}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;