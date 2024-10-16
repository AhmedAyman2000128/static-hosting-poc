import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function UrlsContainer() {
  // const urlState = useSelector((state) => state.url);
  const urlData = useLoaderData();
  if (urlData.length === 0) {
    return null;
  } else {
    return (
      <>
        <NavLink to={"/"}>
          <img alt="" src={logo} width={150} />
        </NavLink>
        <div className="flex flex-col gap-4 bg-blue-950 mt-2 centering p-5">
          {/* {urlState.urls.map((url, index) => {
            const splittedUrl = url.split("/");
            const newUrl =
              splittedUrl[splittedUrl.length - 2] + ".lvh.me";
            return (
              <p key={index} className="text-center pb-1">
                <a href={"http://" + newUrl} target="_blank">
                  {index + 1}. {newUrl}
                </a>
              </p>
            );
          })} */}
          {urlData.map((url, index) => {
            console.log(url.name);
            return (
              <p key={index} className="text-center pb-1">
                <a
                  href={"http://" + url.name + ".lvh.me"}
                  target="_blank"
                >
                  {index + 1}. {url.name + ".lvh.me"}
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
export const queryUrls = async () => {
  const data = await fetch("http://localhost:3000/list");
  const urls = await data.json();
  return urls;
};
