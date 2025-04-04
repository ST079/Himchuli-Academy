import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Index from "./pages/Index";
import UserLayout from "./layouts/UserLayout";
import { useState,useEffect } from "react";
import About from "./pages/About";
import Acacemics from "./pages/Academics";
import Admission from "./pages/Admission";
import Services from "./pages/Services";
import BeyondAcademics from "./pages/BeyondAcademics";
import Contact from "./pages/Contact";
import BlogNews from "./pages/BlogNews";
import NotFound from "./pages/NotFound";
import "./App.css"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Acacemics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beyond-academics" element={<BeyondAcademics />} />
            <Route path="/blogs-news" element={<BlogNews />} />
          </Route>


          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
