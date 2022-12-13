import { useNavigate } from "react-router-dom";

interface Credentials {
  username: string;
}

function useAuth() {
  const navigate = useNavigate();

  function login({ username }: Credentials) {
    localStorage.setItem("username", username);
    navigate("/");
  }

  function logout() {
    localStorage.removeItem("username");
    navigate("/login");
  }

  return {
    login, logout,
  };
}

export { useAuth };
