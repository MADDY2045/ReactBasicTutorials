import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import './App.css';

const App = () => {
  const maxSize = 1048576;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/png,application/pdf',
    minSize: 0,
    maxSize
  });

  const isFileTooLarge = rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  const deleteOption =(dataindex)=>{
    acceptedFiles.filter((item,index)=> index !== dataindex)
  }

  return (
    <div className="container text-center mt-5">
      <div {...getRootProps()}>
        <input {...getInputProps()}/>
        {!isDragActive && 'Click here or drop a file to upload!'}
        {isDragActive && !isDragReject && "Drop it like it's hot!"}
        {isDragReject && "File type not accepted, sorry!"}
        {isFileTooLarge && (
          <div className="text-danger mt-2">
            File is too large.
          </div>
        )}
      </div>
      <div className="uploadedfile-list">
      <ul className="list-group mt-2">
        {acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile,index) => (
        <li key={index} onClick={ ()=>deleteOption(index) } className="list-group-item list-group-item-success">
        {acceptedFile.name}<i className="fa fa-trash"/>
      </li>))}
      </ul>
      </div>
     </div>
  );
};

export default App;