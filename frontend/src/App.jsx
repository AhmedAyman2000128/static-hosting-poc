import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { queryUrls } from "./Urls/UrlsContainer";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UrlsContainer from "./Urls/UrlsContainer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={queryUrls} />
      <Route path="fileUpload" element={<Upload />} />
      <Route
        path="/sitesdeployed"
        element={<UrlsContainer />}
        loader={queryUrls}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
