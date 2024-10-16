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
        <h1 className="ml-auto text-center text-5xl mb-10 mt-20">Links</h1>
        <div className="flex flex-col gap-4 bg-blue-950 mt-2 p-5 ml-auto mr-auto w-fit">
          {/* {urlData.map((url, index) => {
            console.log(url.name);
            return (
              <p key={index} className="text-center pb-1">
                <a href={"http://" + url.name + ".lvh.me"} target="_blank">
                  {index + 1}. {url.name + ".lvh.me"}
                </a>
              </p>
            );
          })} */}
          {urlData.map((url, index) => {
            console.log(url.name);
            return (
              <p key={index} className="text-center pb-1">
                <NavLink to="/userWebsiteInfo" state={url.name + ".lvh.me"}>
                  {index + 1}. {url.name + ".lvh.me"}
                </NavLink>
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
