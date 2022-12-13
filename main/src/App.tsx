import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
