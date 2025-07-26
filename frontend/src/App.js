import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
