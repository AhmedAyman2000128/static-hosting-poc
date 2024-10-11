import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="centering">
      <NavLink to="/fileUpload">
        <button className="text-slate-100 bg-primary p-4 text-4xl rounded-lg">
          Deploy
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
