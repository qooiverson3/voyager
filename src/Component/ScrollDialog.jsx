import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GetConf from '../API/GetConf';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button color="success" onClick={handleClickOpen('paper')}>2023.08.05.21.33.45</Button> */}
      <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<FolderOpenIcon fontSize="large" color='primary'/>}
      defaultExpandIcon={<FolderIcon fontSize="large" color='primary'/>}
      >
      <TreeItem nodeId="5" label="2023.08.04.12.11.35">

        <div onClick={handleClickOpen('paper')}>
          <TreeItem nodeId="10" icon={<InsertDriveFileOutlinedIcon/>} label="nginx.conf" />
        </div>
        <TreeItem nodeId="11" icon={<InsertDriveFileOutlinedIcon/>} label="nginx-http-extra.conf" />
        <TreeItem nodeId="12" icon={<InsertDriveFileOutlinedIcon/>} label="nginx-upstream-extra.conf" />
        </TreeItem>
        </TreeView>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title" sx={{fontWeight:'bold'}}>nginx.conf</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} sx={{backgroundColor:'#4F4F4F'}}>

          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{color:'white'}}
          >
            <GetConf/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" endIcon={<ExitToAppIcon />}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}