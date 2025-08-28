import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/index.jsx";
import About from "./pages/about.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App