import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-red-800 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
