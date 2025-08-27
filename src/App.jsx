import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Index from "./pages/index/index.jsx";
import About from "./pages/about/about.jsx";

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