import { Suspense } from "react";
import Repos from "./pages";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Repos />
    </Suspense>
  );
}

export default App;
