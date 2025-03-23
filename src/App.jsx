import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Loader />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
};

export default App;
