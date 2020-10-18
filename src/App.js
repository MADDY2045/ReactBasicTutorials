import React,{ useState,useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Progress } from 'reactstrap';

const App = () => {
    const [ files,setFiles ] = useState([]);
    const [filesizeflag,setFilesizeflag] = useState(false);
    const [filetypeflag,setFiletypeflag] = useState(false);
    const [filecountflag,setFilecountflag] = useState(false);
    const [validatorflag,setValidatorflag] = useState(false);
    const [loaded,setLoaded] = useState(0)
    useEffect(() => {
     if(filesizeflag && filetypeflag && filecountflag){
      setValidatorflag(true)
     }else{
      setValidatorflag(false)
     }
     if(files.length === 0 || files.length === undefined){
      setValidatorflag(false);
      setFiletypeflag(false);
      setFilesizeflag(false);
      setFilecountflag(false)
     }
    }, [filesizeflag,filetypeflag,filecountflag,files]);

   useEffect(() => {
    if(files && files.length > 0){

      if(files.length > 3){
        toast.warning('File Count exceeds 3');
        setFilecountflag(false)
        setFiles([]);
        return;
      }else{
        console.log(`files: ${files}`);
        setFilecountflag(true)
      }

      Array.from(files).map(item=>{
        if(item.size > 35000 ){
          toast.warning(`file ${item.name} exceeds size`);
          setFilesizeflag(false);
          return setFiles([]);
          }
          else{
          setFilesizeflag(true);
        }
      })

      Array.from(files).map(item=>{
        if(item.type !== 'application/pdf' ){
          toast.warning('invalid file type');
          setFiletypeflag(false);
          return setFiles([])
        }else{
          setFiletypeflag(true);
        }
      })

    }
   }, [files]);

  const handleFileUpload =(e)=>{
    setFiles(e.target.files)
    }

    const deleteOption=(index)=>{
      console.log(`clicked ${index}`);
      setFiles( Array.from(files).filter((item,index1)=> {
        console.log(`item.index is ${index1}`);
        return index1 !== index
      }));
    }

    const loadFiles = ()=>{
      if(files.length === 0 || files.length === undefined){
          setValidatorflag(false);
          return;
         }
         const data = new FormData()
         for(var x = 0; x< Array.from(files).length; x++) {
           data.append('file', Array.from(files)[x])
         }

         axios.post("http://localhost:6090/upload", data,
         {
          onUploadProgress: ProgressEvent =>setLoaded(ProgressEvent.loaded / ProgressEvent.total*100)
          })
          .then(res => {
            // then print response status
           toast.success('upload success')
          })
          .catch(err => { // then print response status
            toast.error('upload fail')
          })
    }


  return (
    <div className="container fileupload-main-container">
       <ToastContainer />
       {!validatorflag ? <div>
     <input type="file" multiple name="file" id="file" className="inputfile" onChange={ handleFileUpload }/>
      <label htmlFor="file" id="choosefile"><i className="fa fa-upload" aria-hidden="true"></i> Choose a file</label>
      </div>:null}
       {filesizeflag && filetypeflag && filecountflag ?
       <button onClick={ loadFiles } id="upload-btn" className="btn btn-warning">Upload</button>:null}
       { validatorflag ?
       <ul className="list-group">
         {Array.from(files).map((item,index)=>{
           return <li id="selectedlist" key={index} className="list-group-item">{item.name}
           <i id="trash-icon"onClick={()=>deleteOption(index)} className="fa fa-trash fa-lg" aria-hidden="true"></i></li>
         })}
        </ul>:null
      }
      <div className="progress-bar">
      <Progress max="100" color="warning" value={loaded} >{Math.round(loaded,2) }%</Progress>
      </div>
   </div>
       );
}

export default App;
