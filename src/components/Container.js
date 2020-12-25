import React,{ useState } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import MainList from '../components/MainList';
import CreateNew from './CreateNew';
import CardComponent from './CardComponent';

const SimpleContainer=()=>{

  const [ listAll,setListAll ] = useState(false);
  const ListAllTemplates=()=>{
    console.log('tested');
    setListAll(true);
  }

  return (
    <div >
       <Container fixed >
        <div style={{ backgroundColor: '#a0bfde', minHeight: '90vh' }} >
        <AppBar />
        <MainList handleClick={ ListAllTemplates } />
        <CreateNew />
        <CardComponent listAll={ listAll } />
        </div>
    </Container>
    </div>
  );
}

export default SimpleContainer;