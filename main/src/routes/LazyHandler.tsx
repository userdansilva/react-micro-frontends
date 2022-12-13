import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LazyHandler() {
  return (
    <Suspense fallback={(
      <div
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-white">Loading...</h1>
      </div>
    )}
    >
      <Outlet />
    </Suspense>
  );
}

export { LazyHandler };
