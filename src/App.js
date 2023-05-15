import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import { DataProvider } from "./context/DataProvider";
import { SearchProvider } from "./context/Search";



function App() {
  return (
    <BrowserRouter>
    <DataProvider>
    <SearchProvider>      
      <Router />
    </SearchProvider>       
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
