import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <h1>Logout Page</h1>
  );
}

export default Logout;
