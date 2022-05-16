import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../src/components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
