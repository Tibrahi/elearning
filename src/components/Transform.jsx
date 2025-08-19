import React, { useState } from 'react';

const Transform = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary('');
  };

  const handleSummarize = async () => {
    if (!file) return;
    setLoading(true);
    // Simulate summary (replace with real API call)
    setTimeout(() => {
      setSummary(`Summary of file: ${file.name}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Transform & Summarize File</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-6">
        <input
          type="file"
          accept=".txt,.pdf,.doc,.docx"
          onChange={handleFileChange}
          className="mb-4 border border-green-400 rounded px-3 py-2 w-full"
        />
        <button
          onClick={handleSummarize}
          disabled={!file || loading}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-colors duration-300"
        >
          {loading ? 'Summarizing...' : 'Summarize File'}
        </button>
        {summary && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-bold text-green-700 mb-2">Summary:</h3>
            <pre className="bg-green-50 rounded p-4 text-gray-800 whitespace-pre-wrap">{summary}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transform;
