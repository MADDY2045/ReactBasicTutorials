import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import RejectedStepper from './RejectedstatusStepper';
import ApprovedStepper from '../components/ApprovedStatusStepper';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const DraggableDialog=(props)=>{

  return (
    <div>
      <Dialog
        open={ props.open }
        onClose={props.handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Current Status
        </DialogTitle>
        <DialogContent>

            { Object.entries(props.statusUid).length >0 && props.statusUid.data.status !== 'pending' ? props.statusUid.data.status === 'approved' ? <ApprovedStepper status="approved" />:<RejectedStepper/>:<ApprovedStepper status="pending" /> }

        </DialogContent>
        <DialogActions>
          <Button onClick={ props.handleClose } color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DraggableDialog;