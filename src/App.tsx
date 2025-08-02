import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout";
import type { RootState } from './store/store';
import './index.css';

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-color");
    document.body.classList.add(`theme-${currentTheme}`);
  }, [currentTheme]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
