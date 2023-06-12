import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageContainers from "./containers/PageContainers";
import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Card from "./pages/Card";

function App() {
  return (
    <PageContainers>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </PageContainers>
  );
}

export default App;
