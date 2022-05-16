import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
