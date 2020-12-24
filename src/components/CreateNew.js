import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginLeft: theme.spacing(140),
      marginTop: theme.spacing(10),
      '&:active': {
        outline: 'none',
      },
      '&:focus': {
        outline: 'none',
      }
    },
  }
}));

const CreateNew=()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CreateNew;