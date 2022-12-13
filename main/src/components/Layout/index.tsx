import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

function Layout() {
  return (
    <div className="flex text-sm bg-slate-900">
      <Navigation />

      <div className="flex-1 p-5">
        <div className="bg-white h-full p-7 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { Layout };
