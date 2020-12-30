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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'-400px auto',
    maxWidth: 575,
    minWidth:575,
    },
        table:{
          maxHeight:400
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
        { props.listAllFlag ? props.listAll.length>0 ?
        <Card >
        <CardContent>
          <div className={classes.title} >
          <TableContainer className={classes.table} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Whatsapp UID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Language Code</TableCell>
            <TableCell>Attachment</TableCell>
            <TableCell>Text</TableCell>
            <TableCell>Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.listAll.map((item,index)=>{
            return <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.uid}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.category}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.whatsapp_account_uid}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.language_code}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.attachment}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.text}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.rejected_reason}
              </TableCell>
            </TableRow>
          })}

        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </CardContent>
      </Card>:<Card >
        <CardContent>
          <div className={classes.title} >
          <List component= {"div"} className={classes.listmain}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon>
              <LabelOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Oops no templates" />
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