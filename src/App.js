import React,{ useEffect,useState } from 'react';
import KarixHome from './components/KarixHome';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SidModal from '../src/components/SidModal';

const App =() =>{
        const [show, setShow] = useState(false);
        const [ validFlag, setValidFlag ] = useState(true);
        const [sid, setSid] = useState("");
        const [token, setToken] = useState("");

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [ initialTokenObject,setInitialTokenObject ] = useState({});

  useEffect(()=>{
    if(sid !== '' && token !== ''){
      setValidFlag(false);
    }else{
      setValidFlag(true);
    }
  },[sid,token])

  const handleLogout =() =>{
    var testObject = {};
    testObject.SID = '';
    testObject.Token = '';
    localStorage.setItem('testObject', JSON.stringify(testObject));
    setInitialTokenObject({})
  }

  useEffect(()=>{
    // var testObject = { 'SID': "abcde", 'Token': "" };
    // localStorage.setItem('testObject', JSON.stringify(testObject));
    var retrievedObject = localStorage.getItem('testObject');
    let initialTokenObject1 = JSON.parse(retrievedObject);
    if(initialTokenObject1 === undefined || initialTokenObject1=== null ){
      setShow(true);
    }
    else if( initialTokenObject1.SID === '' || initialTokenObject1.Token === '' ) {
      setShow(true)
    }
    else{
      setShow(false)
      setInitialTokenObject(initialTokenObject1)
    }
  },[]);

  const handleChange= (param,value) =>{
    if(param==='sid') {
      setSid(value)
    }
    if(param === 'token'){
      setToken(value)
    }
  }


function renderApp(){
  if(initialTokenObject.SID === '' || initialTokenObject.Token === '' || Object.keys(initialTokenObject).length === 0) {
    return (<>
        <SidModal
        validFlag = { validFlag }
        handleCredentialsSubmit = { handleCredentialsSubmit }
        show={ show }
        sid={sid}
        token={ token }
        handleClose={ handleClose }
        handleShow={ handleShow }
        handleChange={ handleChange } />
        <h4>Please reload and set credentials to go to the home page</h4>
      </>
    );
  }else{
    return ( <div className="App"><KarixHome handleLogout ={ handleLogout } sid={ initialTokenObject.SID } token={ initialTokenObject.Token }/></div> )
  }
}

const handleCredentialsSubmit = (e)=>{
  if(sid === '' || token === '') return;
  e.preventDefault();
  var testObject = {};
  testObject.SID = sid;
  testObject.Token = token;
  localStorage.setItem('testObject', JSON.stringify(testObject));
  setShow(false);
  window.location.reload();
}

  return (
    <div className="App">
     { renderApp() }
    </div>
  );
}

export default App;
