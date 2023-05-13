import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./app.css"


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
