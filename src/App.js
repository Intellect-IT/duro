import { Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Footer2 from "./components/Footer2";
import Brands from "./pages/Brands";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import Brand from "./pages/Brand";

import GoToTop from "./components/GoToTop";

function App() {
  const [header, setHeader] = useState(false);
  const location = useLocation();
  const changeNavbar = location.pathname === "/";

  return (
    <Suspense fallback="Loading...">
      <div>
        {changeNavbar ? (
          <Header1 header={header} />
        ) : (
          <Header2 header={header} />
        )}
        <Routes>
          <Route path="/" exact element={<Home header={header} />} />
          <Route path="/our-story" element={<Story setHeader={setHeader} />} />
          <Route path="/contact" element={<Contact setHeader={setHeader} />} />
          <Route path="/gallery" element={<Gallery setHeader={setHeader} />} />
          <Route path="/news/:slug" element={<News setHeader={setHeader} />} />
          <Route path="/news" element={<Press setHeader={setHeader} />} />
          <Route path="/brands/:slug" element={<Brand setHeader={setHeader}/>} />
          <Route path="/brands" element={<Brands setHeader={setHeader} />} />
          <Route path="/privacy" element={<Privacy setHeader={setHeader} />} />
        </Routes>
        {changeNavbar ? null : <GoToTop />}
        {changeNavbar ? null : <Footer2 />}
      </div>
    </Suspense>
  );
}

export default App;
