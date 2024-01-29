import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import SideBar from "../pages/Shared/SideBar/SideBar";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-[800px] max-w-[2400px] mx-auto h-screen flex">
        <div className="min-w-72">
          <SideBar />
        </div>
        <div className="flex-1">
          <header className="my-2 mb-10">
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
