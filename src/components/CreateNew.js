import React,{ useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormInput from '../components/FormInput';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {

            position: 'absolute',
            bottom: theme.spacing(19),
            right: theme.spacing(39),

      '&:active': {
        outline: 'none',
      },
      '&:focus': {
        outline: 'none',
      }
    },
  },
  button:{
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  }
}));

const CreateNew=()=>{


    const [open, setOpen] = useState(false);
    const [ category,setCategory ] = useState('');
    const [ whatsappUid,setWhatsappUid ] = useState('')
    const [ name,setName ] = useState('')
    const [ languagecode,setLanguagecode ] = useState('')
    const [ text,setText ] = useState('')
    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setTimeout(()=>{
            setOpen(false);
         },0)
        };

  const classes = useStyles();

  useEffect(()=>{
    console.log(`openflag is ${open}`);
},[open])

const handleChange=(name,e)=>{
 // console.log(`name is ${name} and e is ${e.target.value}`);
  if(name==='Category'){
    setCategory(e.target.value);
  }
  if(name==='WhatsappUID'){
    setWhatsappUid(e.target.value);
  }
  if(name==='Name'){
    setName(e.target.value)
  }
  if(name==='LanguageCode'){
    setLanguagecode(e.target.value)
  }
  if(name==='Text'){
    setText(e.target.value);
  }
}

const createNewTemplate=()=>{
  let data={}
  if(category && whatsappUid && name && languagecode && text){
    data.Category = category;
    data.WhatsappUid = whatsappUid;
    data.Name = name;
    data.Languagecode = languagecode;
    data.Text = text;
    console.log(`final data is ${JSON.stringify(data,null,2)}`);
    setTimeout(()=>{
      setOpen(false);
   },0);
   let url = 'https://2ecc6220-e7a1-4dc4-9928-4a78b990e407:4667110b-67a1-4b98-a3dd-7045ac56c796@api.karix.io/whatsapp/template/'
   axios.post('/whatsapp/template',{data})
   .then(response=>{
      console.log(`response is ${JSON.stringify(response.data,null,2)}`);
   })
   .catch(err=>console.log(`error in creation of template ${err}`))
  }else{
    alert("pls enter all values");
    return;
  }




}
  return (
    <div className={classes.root} onClick={ handleClickOpen }>
        <Tooltip title="Create a new Whatsapp template" placement="top">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Please fill in the details</DialogTitle>
        <DialogContent>
            <FormInput label="Category" name="Category" handleChange={(e)=>{handleChange("Category",e)}}/>
            <FormInput label="WhatsappUID" name="WhatsappUID" handleChange={(e)=>{handleChange("WhatsappUID",e)}}/>
            <FormInput label="Name" name="Name" handleChange={(e)=>{handleChange("Name",e)}}/>
            <FormInput label="LanguageCode" name="LanguageCode" handleChange={(e)=>{handleChange("LanguageCode",e)}}/>
            <FormInput label="Text" name="Text"  handleChange={(e)=>{handleChange("Text",e)}}/>
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button className={classes.button} onClick={createNewTemplate} color="primary">
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateNew;