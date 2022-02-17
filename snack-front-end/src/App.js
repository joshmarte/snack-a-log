import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";

// PAGES
import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/snacks" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
