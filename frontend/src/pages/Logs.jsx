import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
function Logs() {
  const location = useLocation();
  const url = location.state;
  const [metrics, setMetrics] = useState(null); //after getting the metrics
  return (
    <>
      <NavLink to={"/"}>
        <img alt="" src={logo} width={150} />
      </NavLink>
      <h1 className="ml-auto text-center text-5xl mb-10 mt-20">Website Link</h1>
      <div className="flex flex-col gap-4 bg-blue-950 mt-2 p-5 ml-auto mr-auto w-fit">
        <div className="website-link">
          <a
            href={"http://" + url}
            target="_blank"
            className="text-primary font-bold"
          >
            {url}
          </a>
        </div>
        <button
          //   onClick={() => {
          //     getSiteMetrics();
          //   }}
          className="bg-primary p-3 text-3xl rounded-lg font-bold"
          style={{ color: "rgb(249 191 190)" }}
        >
          Refresh
        </button>
        {/* metrics about the website */}
      </div>
    </>
  );
}

export default Logs;
// const getSiteMetrics = async()=>{
//     const data = await fetch({"http://localhost:3000/"/*endpoint*/});
//     const metrics = await data.json();
//     setMetrics(metrics);
// }
