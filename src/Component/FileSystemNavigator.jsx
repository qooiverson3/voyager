import React, { useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ScrollDialog from './ScrollDialog';

export default function FileSystemNavigator({onStateChange}) {
  const [childState, setChildState] = useState('');

  const handleChange = (event) => {
    const newState = "it's work!!";
    setChildState(newState);
    onStateChange(newState); // 呼叫父組件提供的函式，將狀態傳遞給父組件
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<FolderOpenIcon fontSize="large" color='primary'/>}
      defaultExpandIcon={<FolderIcon fontSize="large" color='primary'/>}
      sx={{flexGrow: 1, maxWidth: 450, overflowY: 'auto' }}
    >
      <TreeItem nodeId="5" label="2023.08.04.12.11.35" onClick={<ScrollDialog/>}>
        <TreeItem nodeId="10" label="nginx.conf" />
        <TreeItem nodeId="11" label="nginx-http-extra.conf" />
        <TreeItem nodeId="12" label="nginx-upstream-extra.conf" />
      </TreeItem>
    </TreeView>
  );
}