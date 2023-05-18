import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { DataProvider } from "./context/DataProvider";
import { SearchProvider } from "./context/SearchProvider";
import { Router } from "./router/Router";
import "./app.css"



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <SearchProvider>      
            <Router />
          </SearchProvider>       
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
