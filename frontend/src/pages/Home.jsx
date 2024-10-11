import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UrlsContainer from "../Urls/UrlsContainer";

function Home() {
  return (
    <>
      <div className="centering">
        <NavLink to="/fileUpload">
          <button className="text-slate-100 bg-primary p-4 text-4xl rounded-lg">
            Deploy
          </button>
        </NavLink>
        <UrlsContainer />
      </div>
    </>
  );
}

export default Home;
