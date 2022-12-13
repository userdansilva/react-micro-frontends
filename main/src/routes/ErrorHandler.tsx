import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

function Error() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Ops! Something went wrong</h1>
    </div>
  );
}

function ErrorHandler() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Outlet />
    </ErrorBoundary>
  );
}

export { ErrorHandler };
