import React,{useCallback} from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
    <h1 className='title text-3xl font-bold mt-10'>Upload Files</h1>
    <h1 className='p-16 mt-10 mr-20 ml-20 border border-neutral-400' {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </h1>
    </>
  );
}

export default Upload;
