import { useState } from "react";

function Upload() {
  const [files, setFiles] = useState([]);
  async function sendFiles() {
    if (files.length === 0) {
      alert("please select files first");
      return;
    }
    let dataToBeSent = new FormData();
    console.log(files);
    files.forEach((file) => {
      dataToBeSent.append("files", file);
    });
    // console.log(dataToBeSent.getAll("files"));
    try {
      //api of the backend
      const response = await fetch("localhost", {
        method: "POST",
        body: dataToBeSent,
      });
      if (response.ok) {
        const data = await response.json();
      }
    } catch (error) {}
  }
  return (
    <div className="centering flex flex-col gap-4">
      <div className="text-center text-4xl">Deployment</div>
      <div className="bg-blue-950 p-4 rounded-md flex flex-col gap-4">
        <div className="p-3 border-2 border-white p-4 rounded-xl">
          <input
            type="file"
            multiple
            onChange={(event) => {
              setFiles(Array.from(event.target.files));
            }}
          />
        </div>
        <button
          className="bg-blue-700 rounded-xl p-4"
          onClick={() => {
            sendFiles();
          }}
        >
          Deploy
        </button>
      </div>
    </div>
  );
}

export default Upload;
