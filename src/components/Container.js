import React,{ useState } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import MainList from '../components/MainList';
import CreateNew from './CreateNew';
import CardComponent from './CardComponent';
import axios from 'axios';
import StatusCardComponent from '../components/StatusCardComponent';
import StatusModal from '../components/statusModal';

const SimpleContainer=()=>{

  const [ listAll,setListAll ] = useState([]);
  const [ listAllFlag,setListAllFlag ] = useState(false);
  const [ statusAllFlag,setStatusAllFlag ] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [ statusUid, setStatusUid ] = React.useState({});

  const handleClickOpen = () => {
    setTimeout(()=>{
      setOpen(true);
    },0)

  };

  const handleClose = () => {
    setTimeout(()=>{
      setOpen(false);
    },0)
  };

  const showModalStatus=(uid)=>{
    axios.get(`http://localhost:7001/getstatus/${uid}`)
    .then(response=>{
      console.log(response.data);
      if(response.data.message === 'success'){
        if(!response.data.data.error){
          setStatusUid([])
        }else{
          //setStatusUid(response.data.data)
          setStatusUid({
            "meta": {
              "request_uuid": "e54b13f5-0831-40f1-959f-e9c5a8ff2957"
            },
            "data": {
              "uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
              "status": "approved",
              "category": "account_update",
              "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
              "name": "template_1",
              "language_code": "string",
              "attachment": "image",
              "text": "Hi {{*}}, your OTP is {{*}}",
              "rejected_reason": "string"
            }
          })
        }
         setTimeout(()=>{
            setOpen(true);
        },0)
      }
    })
    .catch(err=>console.log(err))

  }

  const ListAllTemplates=()=>{
    console.log('tested');
    let url = 'http://localhost:7001/getalltemplates'
    axios.get(url)
    .then(response=>{
      console.log(response.data);
      if(response.data.message === 'success'){
        //setListAll(response.data.data.objects);

        setListAll([{
          "uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
          "status": "pending",
          "category": "account_update",
          "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
          "name": "template_1",
          "language_code": "en",
          "attachment": "image",
          "text": "Hi {{*}}, your OTP is {{*}}",
          "rejected_reason": "string"
          },
          {
            "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
            "status": "pending",
            "category": "payment_update",
            "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
            "name": "template_2",
            "language_code": "en",
            "attachment": "image",
            "text": "Hi, your order  {{*}} has been despatched",
            "rejected_reason": "string"
            },
            {
              "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
              "status": "pending",
              "category": "payment_update",
              "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
              "name": "template_2",
              "language_code": "en",
              "attachment": "image",
              "text": "Hi, your order  {{*}} has been despatched",
              "rejected_reason": "string"
              },
              {
                "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
                "status": "pending",
                "category": "payment_update",
                "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
                "name": "template_2",
                "language_code": "en",
                "attachment": "image",
                "text": "Hi, your order  {{*}} has been despatched",
                "rejected_reason": "string"
                }]);
        setStatusAllFlag(false);
        setListAllFlag(true);
      }
    })
    .catch(err=>console.log(err))
}

const getTemplateStatus =()=>{
  console.log('tested');
    let url = 'http://localhost:7001/getalltemplates'
    axios.get(url)
    .then(response=>{
      console.log(response.data);
      if(response.data.message === 'success'){
        //setListAll(response.data.data.objects);

        setListAll([{
          "uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
          "status": "pending",
          "category": "account_update",
          "whatsapp_account_uid": "3e4e654c-f4ad-430d-b41e-d71068ecf948",
          "name": "template_1",
          "language_code": "en",
          "attachment": "image",
          "text": "Hi {{*}}, your OTP is {{*}}",
          "rejected_reason": "string"
          },
          {
            "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
            "status": "pending",
            "category": "payment_update",
            "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
            "name": "template_2",
            "language_code": "en",
            "attachment": "image",
            "text": "Hi, your order  {{*}} has been despatched",
            "rejected_reason": "string"
            },
            {
              "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
              "status": "pending",
              "category": "payment_update",
              "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
              "name": "template_2",
              "language_code": "en",
              "attachment": "image",
              "text": "Hi, your order  {{*}} has been despatched",
              "rejected_reason": "string"
              },
              {
                "uid": "3e654c-f4ad-430d-b41e-d71068ecf948",
                "status": "pending",
                "category": "payment_update",
                "whatsapp_account_uid": "3e54c-f4ad-430d-b41e-d71068ecf948",
                "name": "template_2",
                "language_code": "en",
                "attachment": "image",
                "text": "Hi, your order  {{*}} has been despatched",
                "rejected_reason": "string"
                }]);
                setListAllFlag(false);
                setStatusAllFlag(true);
      }
    })
    .catch(err=>console.log(err))
}

return (
    <div >
       <Container fixed >
        <div style={{ backgroundColor: '#a0bfde', minHeight: '90vh' }} >
        <AppBar />
        <MainList handleClick={ ListAllTemplates } getTemplateStatus={ getTemplateStatus } />
        <CreateNew />
        <CardComponent listAll={ listAll } listAllFlag = { listAllFlag } />
        <StatusCardComponent listAll={ listAll } statusAllFlag = { statusAllFlag } showModalStatus={ showModalStatus } />
        <StatusModal open={ open } handleClickOpen={ handleClickOpen } handleClose={ handleClose } statusUid={ statusUid }/>
        </div>
    </Container>
    </div>
  );
}

export default SimpleContainer;