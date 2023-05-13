import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import { DataProvider } from "./context/DataProvider";


function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <Router />
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
