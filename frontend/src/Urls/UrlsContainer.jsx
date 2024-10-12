import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
function UrlsContainer() {
  const urlState = useSelector((state) => state.url);
  if (urlState.urls.length === 0) {
    return null;
  } else {
    return (
      <>
        <NavLink to={"/"}>
          <img alt="" src={logo} width={150} />
        </NavLink>
        <div className="flex flex-col gap-4 bg-blue-950 mt-2 centering p-5">
          {urlState.urls.map((url, index) => {
            return (
              <p key={index} className="text-center pb-1">
                <a href={url} target="_blank">
                  {index + 1}. {url}
                </a>
              </p>
            );
          })}
        </div>
      </>
    );
  }
}

export default UrlsContainer;
