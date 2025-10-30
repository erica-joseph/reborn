import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import BookPage from "./pages/BookPage";
import AboutPage from "./pages/AboutPage";
import './style/style.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </>
  );
}

export default App;
