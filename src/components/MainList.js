import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
listitem:{
        paddingTop:theme.spacing(2),
        minHeight:70,
        maxHeight:70,
       fontSize:'8px'
      }
}));

const SimpleList=(props)=>{
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container className={classes.list} >
        <div style={{ backgroundColor: '#FFF',width:250 }} >
      <List component= { "nav" } aria-label="main mailbox folders" className={classes.listmain}>
        <ListItem onClick={ props.handleClick } button className={classes.listitem}>
          <ListItemIcon>
            <ListSharpIcon />
          </ListItemIcon>
          <ListItemText primary="List All Templates" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.listitem}>
          <ListItemIcon>
          <ListSharpIcon/>
          </ListItemIcon>
          <ListItemText primary="List Template by Id" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.listitem}>
          <ListItemIcon>
          <ListSharpIcon/>
          </ListItemIcon>
          <ListItemText primary="List All Whatsapp Number" />
        </ListItem>
        <Divider />
        <ListItem onClick={ props.getTemplateStatus } button className={classes.listitem}>
          <ListItemIcon>
          <ContactSupportSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Get Status of a template" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.listitem}>
          <ListItemIcon>
            <PublishSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Upload Photo" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.listitem}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Reserved" />
        </ListItem>
      </List>
      </div>
    </Container>
</React.Fragment>
  );
}

export default SimpleList;