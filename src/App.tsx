import { Switch } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FdSuport from './components/Home/FdSuport';
import Navbar from './components/NavBar/NavBar';
import About from './pages/About';
import Audiovisuel from './pages/Audiovisuel';
import Contact from './pages/Contact';
import Devices from './pages/Devices';
import Error from './pages/Error/error_404';
import Home from './pages/home';
import Others from './pages/Others';
import Parts from './pages/Parts';
import Products from './pages/Products';
import Server from './pages/Server';
import Services from './pages/Services';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { routes } from './routes';

// function App() {
//   const router = createBrowserRouter([...routes]);

//   return <RouterProvider router={router}></RouterProvider>;
// }

// export default App;


function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/products" element={<Products/>}/ > 
          <Route  path="/products/server" element={<Server/>} />
          <Route  path="/products/devices" element={<Devices/>} /> 
          <Route  path="/products/parts" element={<Parts/>} />
          <Route  path="/products/audiovisuel" element={<Audiovisuel/>} /> 
          <Route  path="/products/other" element={<Others/>} /> 
          <Route  path="/services" element={<Services/>} />
          <Route  path="/contact" element={<Contact/>} />
     </Routes>
      </Router>
 
    </>
  );
}

export default App;
