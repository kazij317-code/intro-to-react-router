// // -------------------------------Start: 37_1 ---------------------------------------
// // (1) for React Router Instillation: Command in terminal or cmd which project folder is creat: npm i react-router

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // (2) st Create a Router and Render from react router:
// import { createBrowserRouter, RouterProvider } from "react-router";
// // (3)commit
// // import { RouterProvider } from "react-router/dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <div>Hello World</div>,
// //   },
// // ]);
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello from react router</div>
//   }
// ])

// // (2) en



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     {/* (4)st commit <App /> */}
//     <RouterProvider router={router}></RouterProvider>
//     {/* (4)en */}
//   </StrictMode>,
// )
// // --------------------------
// // Practice:
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'


// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
    
// //   </StrictMode>,
// // )

// //---------------------------
// // -------------------------------End:37_1-(1) to (4) --------------------------------
// -------------------------------Start: 38_2 ---------------------------------------


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter, RouterProvider } from "react-router";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from './assets/components/Root/Root.jsx';
import Home from './assets/components/Home/Home.jsx';
import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
import Laptops from './assets/components/Laptops/Laptops.jsx';


const router = createHashRouter([
  // {
  //   path: '/',
  //   element: <div>Hello from react router</div>
  // },
  // (6) st commit previous, Root+enter
  {
    path: '/',
    Component: Root,
    children: [
      // (9) Home+enter, {index: true, Component: Home}, {path:'mobiles', Component: Mobiles}
      {index: true, Component: Home},
      {path:'mobiles', Component: Mobiles},
      // (11) Laptops+enter
      {path: 'laptops', Component: Laptops}

      // (9)en then create Laptops.jsx file creating Laptop folder in component file
    ]
  },
  // (6) en then create Home.jsx file creating Home folder in component
  
  // (1) st
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    // Component: App
    element: <App></App>
  }
  // (1)en then create Root.jsx file creating Root folder creating component folder in src folder
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>
);
// --------------------------
// Practice:
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
    
//   </StrictMode>,
// )

//---------------------------
// -------------------------------End:38_2-(1) to () --------------------------------
