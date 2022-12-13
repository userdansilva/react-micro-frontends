import { Navigate, Outlet } from "react-router-dom";

function Middleware() {
  const username = localStorage.getItem("username");

  if (!username) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <Outlet />
  );
}

export { Middleware };
