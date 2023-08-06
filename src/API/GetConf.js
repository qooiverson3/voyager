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

  return (
    <pre>
    {fileContent}
    </pre>
  );
};

export default GetConf;
