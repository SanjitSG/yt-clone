import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
