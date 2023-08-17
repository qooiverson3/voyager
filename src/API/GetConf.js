import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetConf = ({file}) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/${file}`);
        setFileContent(response.data.content);
      } catch (error) {
        alert('Error fetching file data:', error);
      }
    };

    fetchFileData();
  }, []);

  const lines = fileContent.split('\n');
  return (
    <pre>
    {lines.map((line, index) => (
      <span key={index}>
        {index + 1}   {line}
        <br />
      </span>
    ))}
    {/* {fileContent} */}
    </pre>
  );
};

export default GetConf;
