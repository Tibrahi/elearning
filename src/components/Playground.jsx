import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
// import './Playground.css';

const Playground = () => {
  const { language } = useParams();
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [noteName, setNoteName] = useState('');
  const [fileExtension, setFileExtension] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [validationType, setValidationType] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Set default file extension based on language
  useEffect(() => {
    switch (language.toLowerCase()) {
      case 'js':
        setFileExtension('.js');
        break;
      case 'php':
        setFileExtension('.php');
        break;
      case 'python':
        setFileExtension('.py');
        break;
      default:
        setFileExtension('');
    }
  }, [language]);

  // Validate note name on change
  useEffect(() => {
    if (noteName && !noteName.endsWith(fileExtension)) {
      setValidationMessage(`File name must end with ${fileExtension}`);
      setValidationType('error');
    } else {
      setValidationMessage('');
      setValidationType('');
    }
  }, [noteName, fileExtension]);

  const handleSubmit = () => {
    if (currentNote.trim()) {
      if (!noteName.trim()) {
        showNotification('Please enter a note name!', 'error');
        return;
      }

      // Validate file extension
      if (!noteName.endsWith(fileExtension)) {
        showNotification(`Note name must end with ${fileExtension}`, 'error');
        return;
      }

      const noteObject = {
        name: noteName,
        content: currentNote,
        language: language.toLowerCase()
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

  const handleEditorChange = (value) => {
    setCurrentNote(value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Add any additional customizations or event listeners here
  };

  const getErrorHint = (error) => {
    const errorMessage = error.message.toLowerCase();
    
    // Common JavaScript errors
    if (errorMessage.includes('unexpected token')) {
      return {
        hint: 'Syntax Error: Check for missing brackets, parentheses, or semicolons',
        suggestions: [
          'Make sure all opening brackets/parentheses have matching closing ones',
          'Check for missing semicolons at the end of statements',
          'Verify that all strings are properly quoted'
        ]
      };
    }
    
    if (errorMessage.includes('is not defined')) {
      return {
        hint: 'Reference Error: Variable or function is not defined',
        suggestions: [
          'Check if the variable/function name is spelled correctly',
          'Make sure the variable/function is declared before using it',
          'Verify that the variable/function is in the correct scope'
        ]
      };
    }
    
    if (errorMessage.includes('cannot read property')) {
      return {
        hint: 'Type Error: Trying to access a property of undefined or null',
        suggestions: [
          'Check if the object exists before accessing its properties',
          'Add a null check before accessing the property',
          'Make sure the object is properly initialized'
        ]
      };
    }

    // Common PHP errors
    if (errorMessage.includes('unexpected $end')) {
      return {
        hint: 'PHP Syntax Error: Missing closing tag or bracket',
        suggestions: [
          'Check if all PHP tags are properly closed (<?php ... ?>)',
          'Verify that all brackets and parentheses are properly closed',
          'Make sure all code blocks are properly terminated'
        ]
      };
    }

    // Common Python errors
    if (errorMessage.includes('indentationerror')) {
      return {
        hint: 'Indentation Error: Incorrect indentation in Python code',
        suggestions: [
          'Make sure all indentation is consistent (use spaces or tabs, not both)',
          'Check that code blocks are properly indented',
          'Verify that all code after a colon (:) is indented'
        ]
      };
    }

    if (errorMessage.includes('nameerror')) {
      return {
        hint: 'Name Error: Variable or function is not defined',
        suggestions: [
          'Check if the variable/function name is spelled correctly',
          'Make sure the variable/function is defined before using it',
          'Verify that you have imported any required modules'
        ]
      };
    }

    // Default error hint
    return {
      hint: 'Error occurred while running the code',
      suggestions: [
        'Check the error message for specific details',
        'Verify that all syntax is correct',
        'Make sure all required variables and functions are defined'
      ]
    };
  };

  const runCode = async (code) => {
    setIsRunning(true);
    setOutput('Running code...\n');

    try {
      // Create a safe execution environment
      const safeCode = `
        try {
          ${code}
        } catch (error) {
          console.error(error);
        }
      `;

      // Create a new Function to execute the code
      const executeCode = new Function(safeCode);
      
      // Capture console.log output
      const originalConsoleLog = console.log;
      const logs = [];
      console.log = (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      };

      // Execute the code
      executeCode();

      // Restore console.log
      console.log = originalConsoleLog;

      // Display the output
      setOutput(logs.join('\n') || 'No output');
    } catch (error) {
      const errorHint = getErrorHint(error);
      setOutput(
        `Error: ${error.message}\n\n` +
        `💡 Hint: ${errorHint.hint}\n\n` +
        `Suggestions:\n${errorHint.suggestions.map(s => `• ${s}`).join('\n')}`
      );
    } finally {
      setIsRunning(false);
    }
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
              placeholder={`Enter an epic note name (must end with ${fileExtension})...`}
              className={`w-full px-4 py-3 bg-gray-900/50 border ${
                validationType === 'error' ? 'border-red-500' : 'border-cyan-500/30'
              } rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all`}
            />
            {validationMessage && (
              <p className={`mt-2 text-sm ${validationType === 'error' ? 'text-red-500' : 'text-cyan-500'}`}>
                {validationMessage}
              </p>
            )}
          </div>

          <div className="h-[400px] mb-6">
            <Editor
              height="100%"
              defaultLanguage={language.toLowerCase()}
              language={language.toLowerCase()}
              value={currentNote}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                suggestOnTriggerCharacters: true,
                quickSuggestions: true,
                parameterHints: { enabled: true },
                formatOnPaste: true,
                formatOnType: true,
                tabSize: 2,
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                renderLineHighlight: 'all',
                matchBrackets: 'always',
                autoClosingBrackets: 'always',
                autoClosingQuotes: 'always',
                autoIndent: 'full',
                folding: true,
                foldingStrategy: 'indentation',
                showFoldingControls: 'always',
                suggest: {
                  preview: true,
                  showMethods: true,
                  showFunctions: true,
                  showConstructors: true,
                  showFields: true,
                  showVariables: true,
                  showClasses: true,
                  showStructs: true,
                  showInterfaces: true,
                  showModules: true,
                  showProperties: true,
                  showEvents: true,
                  showOperators: true,
                  showUnits: true,
                  showValues: true,
                  showConstants: true,
                  showEnums: true,
                  showEnumMembers: true,
                  showKeywords: true,
                  showWords: true,
                  showColors: true,
                  showFiles: true,
                  showReferences: true,
                  showFolders: true,
                  showTypeParameters: true,
                  showSnippets: true
                }
              }}
            />
          </div>

          <div className="flex gap-4">
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
            <button
              onClick={() => runCode(currentNote)}
              disabled={isRunning}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg ${
                isRunning
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400'
              }`}
            >
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>

          {/* Output Section */}
          {output && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Output:</h3>
              <div className={`bg-gray-900/50 border rounded-lg p-4 ${
                output.startsWith('Error:') 
                  ? 'border-red-500/50' 
                  : 'border-cyan-500/30'
              }`}>
                <pre className={`font-mono text-sm whitespace-pre-wrap ${
                  output.startsWith('Error:') 
                    ? 'text-red-400' 
                    : 'text-gray-100'
                }`}>
                  {output}
                </pre>
              </div>
            </div>
          )}
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
                      onClick={() => runCode(note.content)}
                      className="p-2 text-green-400 hover:text-green-300 transition-colors"
                      title="Run"
                    >
                      ▶️
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
                <div className="h-[200px]">
                  <Editor
                    height="100%"
                    language={note.language}
                    value={note.content}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 12,
                      wordWrap: 'on',
                      automaticLayout: true,
                      scrollBeyondLastLine: false,
                      lineNumbers: 'on',
                      renderLineHighlight: 'all',
                      matchBrackets: 'always',
                      folding: true,
                      foldingStrategy: 'indentation',
                      showFoldingControls: 'always'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;