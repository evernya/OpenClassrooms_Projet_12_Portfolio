//IMPORT
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import Home from "../src/pages/Home/Home";
import Projet from "../src/pages/Projet/Projet";
import About from "../src/pages/About/About";
import Error from "../src/pages/Error/Error";

//LAYOUTS
import Header from "../src/layouts/Header";
import Footer from "../src/layouts/Footer";

//COMPONENTS

//ASSETS

//CSS
import "./style/style.css";
import ScrollToTop from "./components/Navigation/ScrollToUp";

function App() {
  //state (état, données)

  //comportement

  //affichage (render)
  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:projetId" element={<Projet />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
