/* eslint-disable import/no-unresolved */
import { lazy } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Welcome from "../pages";
import NotFound from "../pages/404";
import { ErrorHandler } from "./ErrorHandler";
import { LazyHandler } from "./LazyHandler";
import { Middleware } from "./Middleware";

const Auth = {
  Login: lazy(() => import("auth/Login")),
  Logout: lazy(() => import("auth/Logout")),
};

const Repos = lazy(() => import("repos/Repos"));

function Routes() {
  return (
    <Switch>
      <Route element={<ErrorHandler />}>
        <Route element={<LazyHandler />}>
          <Route element={<Middleware />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Welcome />} />
              <Route path="/repos" element={<Repos />} />
            </Route>
          </Route>

          <Route path="/login" element={<Auth.Login />} />
          <Route path="/logout" element={<Auth.Logout />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export { Routes };
