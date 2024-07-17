import Contact from "./pages/Contact";
import Page404 from "./pages/pages.jsx/Page404";
import Booking from "./pages/pages.jsx/Booking";
import Team from "./pages/pages.jsx/Team";
import Testimonial from "./pages/pages.jsx/Testimonial";
import Service from "./pages/Service";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


import { Routes, Route } from "react-router-dom";

    <Header />
function App() {
  return (
    <div className="App">

      <Home />
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Service" element={ <Service /> } />
        <Route path="/Testimonial" element={ <Testimonial /> } />
        <Route path="/Team" element={ <Team /> } />
        <Route path="/Booking" element={ <Booking /> } />
        <Route path="/Page404" element={ <Page404 /> } />
        <Route path="/Contact" element={ <Contact /> } />
        

      </Routes>
      <Footer />
          </div>
  );
}

export default App;
