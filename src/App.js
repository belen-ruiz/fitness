import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import { DataProvider } from "./context/DataProvider";
import { SearchBar } from "./context/SearchBar";



function App() {
  return (
    <BrowserRouter>
    <DataProvider>
<SearchProv>      <Router />
    </SearchBar>
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
