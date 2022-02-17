import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";

// PAGES
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Home from "./Pages/Home";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/snacks" element={<Index />} />
        <Route path="/snacks/new" element={<New />} />
        <Route path="/snacks/:id" element={<Show />} />
        <Route path="/snacks/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  );
}

export default App;
