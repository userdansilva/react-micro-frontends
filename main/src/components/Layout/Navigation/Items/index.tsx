import { useLocation } from "react-router-dom";
import { Item } from "./Item";

function Items() {
  const { pathname } = useLocation();

  return (
    <ul className="text-white text-opacity-60 space-y-3">
      <Item
        to="/"
        selected={pathname === "/"}
      >
        Home
      </Item>

      <Item
        to="/repos"
        selected={pathname === "/repos"}
      >
        Repositories
      </Item>

      <Item
        to="/logout"
        selected={pathname === "/logout"}
      >
        Logout
      </Item>
    </ul>
  );
}

export { Items };
