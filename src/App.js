import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import { DataProvider } from "./context/DataProvider";
import { SearchProvider } from "./context/SearchProvider";
import { SearchProvider } from "./context/SearchProvider";



function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <DataProvider>
          <SearchProvider>      
            <Router />
          </SearchProvider>       
        </DataProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
