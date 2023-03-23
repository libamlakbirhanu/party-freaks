import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Index;
