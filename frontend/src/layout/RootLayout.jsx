import { Outlet } from "react-router";
import logo from "../images/logo.png";
function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
