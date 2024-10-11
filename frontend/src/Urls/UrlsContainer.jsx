import { useSelector } from "react-redux";
function UrlsContainer() {
  const urlState = useSelector((state) => state.url);
  if (urlState.urls.length === 0) {
    return null;
  } else {
    return (
      <div className="flex flex-col gap-4 bg-blue-950 mt-2">
        {urlState.urls.map((url, index) => {
          return (
            <p key={index} className="text-center pb-1">
              <a href={url}>{url}</a>
            </p>
          );
        })}
      </div>
    );
  }
}

export default UrlsContainer;
