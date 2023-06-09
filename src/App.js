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
import Giveaway from "./pages/Giveaway";
import Brand from "./pages/Brand";

import GoToTop from "./components/GoToTop";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
// import i18n from "./i18n";

function App() {
  const [header, setHeader] = useState(false);
  const location = useLocation();
  const changeNavbar = location.pathname === "/";
  // const baseRouteUrl = `/${i18n.language}`;
  const baseRouteUrl = ``;
  return (
    <Suspense fallback="Loading...">
      <div>
        {changeNavbar ? (
          <Header1 header={header} />
        ) : (
          <Header2 header={header} />
        )}
        <Routes>
          <Route path={baseRouteUrl + "/"} exact element={<Home header={header} />} />
          <Route path={baseRouteUrl + "/our-story"} element={<Story setHeader={setHeader} />} />
          <Route path="/contact" element={<Contact setHeader={setHeader} />} />
          <Route path="/gallery" element={<Gallery setHeader={setHeader} />} />
          <Route path="/news/:slug" element={<News setHeader={setHeader} />} />
          <Route path="/news" element={<Press setHeader={setHeader} />} />
          <Route path="/brands/:slug" element={<Brand setHeader={setHeader}/>} />
          <Route path="/brands" element={<Brands setHeader={setHeader} />} />
          <Route path="/privacy" element={<Privacy setHeader={setHeader} />} />
          <Route path="/giveaway" element={<Giveaway setHeader={setHeader} />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<Error500 />} />
        </Routes>
        {changeNavbar ? null : <GoToTop />}
        {changeNavbar ? null : <Footer2 />}
      </div>
    </Suspense>
  );
}

export default App;
