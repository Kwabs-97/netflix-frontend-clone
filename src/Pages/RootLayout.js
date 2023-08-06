/** @format */
import { Outlet } from "react-router-dom";
import MainNav from "../Components/Header";

function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
