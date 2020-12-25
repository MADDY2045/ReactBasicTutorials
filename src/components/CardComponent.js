import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'-300px auto',
    maxWidth: 275,
    minWidth:275,
        },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
)

const SimpleCard=(props)=>{
  const classes = useStyles();


  return (
      <div className={classes.root}>
        { props.listAll ?
        <Card >
        <CardContent>
          <div className={classes.title} >
          <List component= {"div"} aria-label="main mailbox folders" className={classes.listmain}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon>
              <LabelOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="List All Templates" />
          </ListItem>
          <Divider />
          </List>
          </div>
        </CardContent>
      </Card>
        :null}

    </div>
  );
}

export default  SimpleCard;