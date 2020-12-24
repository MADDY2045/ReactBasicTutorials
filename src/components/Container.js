import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import MainList from '../components/MainList';
import CreateNew from './CreateNew';

const SimpleContainer=()=>{
  return (
    <React.Fragment >
        <CssBaseline />
        <Container fixed >
        <Typography component="div" style={{ backgroundColor: '#a0bfde', height: '90vh' }} >
        <AppBar />
        <MainList />
        <CreateNew />
        </Typography>
    </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;