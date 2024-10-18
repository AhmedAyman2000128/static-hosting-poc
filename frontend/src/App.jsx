import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { queryUrls } from "./Urls/UrlsContainer";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UrlsContainer from "./Urls/UrlsContainer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} loader={queryUrls} />
      <Route path="fileUpload" element={<Upload />} />
      <Route
        path="/sitesdeployed"
        element={<UrlsContainer />}
        loader={queryUrls}
      />
    </>
  )
);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
