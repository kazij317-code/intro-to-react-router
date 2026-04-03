 // // -------------------------------Start: 38_1 ---------------------------------------
// // (1) for React Router Instillation: Command in terminal or cmd where project folder is created: npm i react-router

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // (2) st Create a Router and Render from react router:
// import { createBrowserRouter, RouterProvider } from "react-router";
// // (3) st commit
// // import { RouterProvider } from "react-router/dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <div>Hello World</div>,
// //   },
// // ]);
// // createBrowserRouter+enter
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello from react router</div>
//   }
// ])
// // (3)en

// // (2) en



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     {/* (4)st commit <App /> <RouterProvider+enter */}
//     <RouterProvider router={router}></RouterProvider>
//     {/* (4)en */}
//   </StrictMode>,
// )
// // --------------------------
// Practice:
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// const router = createBrowserRouter([
//   path: '/',
//   element: <div>Hello from react router</div>
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={router}></RouterProvider>
    
//   </StrictMode>,
// )

// //---------------------------
// // -------------------------------End:38_1-(1) to (4) --------------------------------
// -------------------------------Start: 38_2 ---------------------------------------


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter, RouterProvider } from "react-router";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
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
      // (9) Home+enter, {Component: Home}, {path:'mobiles', Component: Mobiles}
      {index: true, Component: Home},
      {path:'mobiles', Component: Mobiles},
      // (11) Laptops+enter then in Header.jsx file
      {path: 'laptops', Component: Laptops},
      {path: 'about', element: <div>About me here</div>}

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

// const router = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element: <div>Hello from react router</div>
//   // },

//   {
//     path: '/',
//     Component: Root,
//     children: [
//       {index: true, Component: Home},
//       {path: 'mobiles', Component: Mobiles},
//       {path: 'laptops', Component: Laptops}
//     ]
//   },

//   {
//     path: 'about',
//     element: <div>About me here</div>
//   },

//   {
//     path: 'blogs',
//     element: <div>All my blogs are here </div>
//   },

//   {
//     path: 'app',
//     Component: App
//   },

//   {
//     path: '/app2',
//     element: <App></App>
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={router}></RouterProvider>
    
//   </StrictMode>,
// )


//---------------------------
// -------------------------------End:38_2-(1) to (11) --------------------------------
