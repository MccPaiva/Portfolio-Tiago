// import React from "react";
// import Root from './Pages/Root';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Post from './Pages/Post';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu'
// import './style.css';
// import './menu-style.css';
// import postData from "./postData.json";
// 
// 
// function App() {
// 
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//     },
//     {
//       path: "about",
//       element: <About />,
//     },
//     {
//       path: "contact",
//       element: <Contact />,
//     },
//     {
//       path: "post",
//       element: <Post />,
//     }
//   ]);
// 
//   return (
//     <div className="App">
//       <header>
//         <Menu>
//           <a id="home" className="menu-item" href="/">Home</a>
//           <a id="about" className="menu-item" href="/about">Sobre</a>
//           <a id="contact" className="menu-item" href="/contact">Contato</a>
//         </Menu>
//       </header>
//       <RouterProvider className="container" router={router} />
//     </div>
//   );
// }
// 
// export default App;


import React from "react";
import Root from './Pages/Root';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Post from './Pages/Post';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './style.css';
import './menu-style.css';
import postData from "./postData.json";


function App() {

  return (
    <div className="App">
      <header>
        <Menu>
          <Link id="home" className="menu-item" href="/">Home</Link>
          <Link id="about" className="menu-item" href="/about">Sobre</Link>
          <Link id="contact" className="menu-item" href="/contact">Contato</Link>
        </Menu>
      </header>
      <Router className="container">
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="post" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
