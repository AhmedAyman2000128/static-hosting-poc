import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import UrlsContainer from "./Urls/UrlsContainer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="fileUpload" element={<Upload />} />
      <Route path="/sitesdeployed" element={<UrlsContainer />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
