import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exactly element={<HomePage />} />
        <Route path="/projects" exactly element={<Projects />} />
        <Route path="/about" exactly element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
