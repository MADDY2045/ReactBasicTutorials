import React,{ useState } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import MainList from '../components/MainList';
import CreateNew from './CreateNew';
import CardComponent from './CardComponent';
import axios from 'axios';

const SimpleContainer=()=>{

  const [ listAll,setListAll ] = useState([]);
  const [ listAllFlag,setListAllFlag ] = useState(false);
  const ListAllTemplates=()=>{
    console.log('tested');
    let url = 'http://localhost:7001/getalltemplates'
    axios.get(url)
    .then(response=>{
      console.log(response.data);
      if(response.data.message === 'success'){
        setListAll(response.data.data.objects);

        // setListAll([{
        //   "uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
        //   "status": "pending",
        //   "category": "account_update",
        //   "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
        //   "name": "template_1",
        //   "language_code": "string",
        //   "attachment": "image",
        //   "text": "Hi {{*}}, your OTP is {{*}}",
        //   "rejected_reason": "string"
        //   }]);
        setListAllFlag(true);
      }
    })
    .catch(err=>console.log(err))

  }

  return (
    <div >
       <Container fixed >
        <div style={{ backgroundColor: '#a0bfde', minHeight: '90vh' }} >
        <AppBar />
        <MainList handleClick={ ListAllTemplates } />
        <CreateNew />
        <CardComponent listAll={ listAll } listAllFlag = { listAllFlag } />
        </div>
    </Container>
    </div>
  );
}

export default SimpleContainer;