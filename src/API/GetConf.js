import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetConf = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ping');
        setFileContent(response.data.nginxConf);
      } catch (error) {
        alert('Error fetching file data:', error);
      }
    };

    fetchFileData();
  }, []);

  const lines = fileContent.split('\n'); // 將文本按換行符拆分成行陣列
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
