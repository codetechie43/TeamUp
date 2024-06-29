// src/components/FileSharing.jsx
import React, { useState } from 'react';

const FileSharing = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  return (
    <div>
      <h2>Share Files and Documents</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileSharing;
