import React,{ useState } from 'react'
import axios from 'axios';
export default function App() {

  const [ selectedFile,setSelectedFile ] = useState(null);

  const handleFileUpload = (e)=>{
    setSelectedFile(e.target.files[0]);
  }

const uploadedfile=()=>{
      if(selectedFile !==null ){
       return (<div>
                <p>File Name is: {selectedFile.name}</p>
                <p>File Name is: {selectedFile.type}</p>
              </div>)
     }
   }

   const handleSubmit = () =>{
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);
  }

  return (
    <div className="container">
      <h1> File Upload </h1>
      <div className="row">
          <input type="file" onChange={ handleFileUpload }/>
          <button className="btn btn-outline-primary" onClick={ handleSubmit }>Upload</button>
      </div>
      {uploadedfile()}
    </div>
  )
}
