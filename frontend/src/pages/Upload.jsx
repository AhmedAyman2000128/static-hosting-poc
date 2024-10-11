import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUrl } from "../Urls/UrlsReducer";
function Upload() {
  const [zipfile, setzipfile] = useState([]);
  const navigateToHome = useNavigate();
  const dispatch = useDispatch();
  async function sendzipfile() {
    if (zipfile.length === 0) {
      alert("please select zipfile first");
      return;
    }
    let dataToBeSent = new FormData();
    dataToBeSent.append("zipfile", zipfile);
    // console.log(dataToBeSent.getAll("zipfile"));
    dispatch(addUrl("u1"));
    navigateToHome("/", {});
    // try {
    //   //api of the backend
    //   const response = await fetch("localhost", {
    //     method: "POST",
    //     body: dataToBeSent,
    //   });
    //   if (response.ok) {
    //     const data = await response.json();
    //     navigateToHome("/", { url: { newurl: "u1" } });
    //   }
    // } catch (error) {}
  }
  return (
    <div className="centering flex flex-col gap-4">
      <div className="text-center text-4xl">Deployment</div>
      <div className="bg-blue-950 p-4 rounded-md flex flex-col gap-4">
        <div className="p-3 border-2 border-white p-4 rounded-xl">
          <input
            type="file"
            accept=".zip" // only accept .zip zipfile
            onChange={(event) => {
              setzipfile(event.target.files[0]); // single file, so use [0]
            }}
          />
        </div>
        <button
          className="bg-blue-700 rounded-xl p-4"
          onClick={() => {
            sendzipfile();
          }}
        >
          Deploy
        </button>
      </div>
    </div>
  );
}

export default Upload;
