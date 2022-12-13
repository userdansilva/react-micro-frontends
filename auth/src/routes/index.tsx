import { Routes as Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Logout from "../pages/logout";

function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />
    </Switch>
  );
}

export { Routes };
