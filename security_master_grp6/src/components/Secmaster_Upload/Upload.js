import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CancelIcon from "@mui/icons-material/Cancel";
import DescriptionIcon from "@mui/icons-material/Description";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  console.log(files);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    maxFiles: 1,
  });
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files?.length > 1) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Cannot upload multiple files at a time!Upload again!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "File uploaded successfully!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <>
      <h1 className="title text-3xl font-bold mt-10 text-white">
        Upload Equity File
      </h1>

      {/* Drag & Drop Area */}
      <form onSubmit={handleSubmit}>
        <div
          className="p-20 mt-7 text-center mx-auto cursor-pointer border border-white border-dashed rounded"
          style={{ width: 800 }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <h2 className="font-medium text-xl text-white">
              Drop the files here ...
            </h2>
          ) : (
            <h2
              className="font-medium text-xl text-white"
              style={{ listStyle: "none" }}
            >
              Drag & drop CSV file here, or click to select file!
            </h2>
          )}
        </div>
        {files?.length ? (
          <button
            type="submit"
            className="text-sm mt-5 uppercase text-white bg-green-600 border border-green-600 hover:bg-green-700 hover:text-white font-medium rounded-lg px-5 py-2"
          >
            Upload
          </button>
        ) : (
          <></>
        )}

        {/* Accepted Files Preview*/}
        <h2
          className="title text-xl font-semibold text-white mt-10 border-b-2 border-white pb-2 mx-auto"
          style={{ width: 800 }}
        >
          Accepted File
        </h2>
        <ul className="mt-4 mx-auto">
          {files.map((file) => (
            <li key={file.name}>
              <button
                type="button"
                className="w-8 h-8 border border-secondary-400"
                onClick={() => removeFile(file.name)}
              >
                <CancelIcon className="w-6 h-6 fill-white text-red-500" />
              </button>
              <div
                className="mt-2 mb-5 text-white font-medium text-xl border border-gray-200 p-3 mx-auto cursor-pointer"
                style={{ width: 250 }}
              >
                <DescriptionIcon className="text-green-600" /> {file.name}
              </div>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h2
          className="title text-xl font-semibold text-white mt-14 border-b-2 pb-2 border-white mx-auto"
          style={{ width: 800 }}
        >
          Rejected File
        </h2>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <div
                  className="text-white font-medium text-md cursor-pointer"
                  style={{ marginRight: -1360 }}
                >
                  {file.name}
                </div>
                <ul
                  className="text-[12px] text-gray-400"
                  style={{ marginRight: -1360 }}
                >
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="submit"
                className="text-sm uppercase text-white bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:text-white font-medium rounded-lg px-5 py-2"
                style={{ marginRight: 400, marginBottom: 50 }}
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Upload;
