import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import { DateProvider } from "./context/DatesContext";

function App() {
  return (
    <DateProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DateProvider>
  );
}

export default App;
