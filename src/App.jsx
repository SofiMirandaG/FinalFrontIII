import { routes } from "./Router/routes"
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "./styles/App.css";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import { Layout } from "./Layout/Layout";
import useLocalStorage from 'use-local-storage'


function App() {

  return (
<>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
        </Route>
      </Routes>
    </>    
  );
}

export default App;
