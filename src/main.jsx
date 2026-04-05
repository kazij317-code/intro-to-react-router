// // -------------------------------Start: 37_1 ---------------------------------------
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
// // -------------------------------End:37_1-(1) to (4) --------------------------------
// // -------------------------------Start: 37_2 ---------------------------------------

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// // import { createBrowserRouter, RouterProvider } from "react-router";
// import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import Root from './assets/components/Root/Root.jsx';
// import Home from './assets/components/Home/Home.jsx';
// import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
// import Laptops from './assets/components/Laptops/Laptops.jsx';


// const router = createHashRouter([
//   // {
//   //   path: '/',
//   //   element: <div>Hello from react router</div>
//   // },
//   // (6) st commit previous, Root+enter
//   {
//     path: '/',
//     Component: Root,
//     children: [
//       // (9) Home+enter, {Component: Home}, {path:'mobiles', Component: Mobiles}
//       {index: true, Component: Home},
//       {path:'mobiles', Component: Mobiles},
//       // (11) Laptops+enter then in Header.jsx file
//       {path: 'laptops', Component: Laptops},
//       {path: 'about', element: <div>About me here</div>}

//       // (9)en then create Laptops.jsx file creating Laptop folder in component file
//     ]
//   },
//   // (6) en then create Home.jsx file creating Home folder in component

//   // (1) st
//   {
//     path: 'about',
//     element: <div>About me here</div>
//   },
//   {
//     path: 'blogs',
//     element: <div>All my blogs are here</div>
//   },
//   {
//     path: 'app',
//     Component: App
//   },
//   {
//     path: '/app2',
//     // Component: App
//     element: <App></App>
//   }
//   // (1)en then create Root.jsx file creating Root folder creating component folder in src folder
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <RouterProvider router={router}></RouterProvider>

//   </StrictMode>
// );
// // --------------------------
// // Practice:
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // const router = createBrowserRouter([
// //   // {
// //   //   path: '/',
// //   //   element: <div>Hello from react router</div>
// //   // },

// //   {
// //     path: '/',
// //     Component: Root,
// //     children: [
// //       {index: true, Component: Home},
// //       {path: 'mobiles', Component: Mobiles},
// //       {path: 'laptops', Component: Laptops}
// //     ]
// //   },

// //   {
// //     path: 'about',
// //     element: <div>About me here</div>
// //   },

// //   {
// //     path: 'blogs',
// //     element: <div>All my blogs are here </div>
// //   },

// //   {
// //     path: 'app',
// //     Component: App
// //   },

// //   {
// //     path: '/app2',
// //     element: <App></App>
// //   }
// // ])

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     {/* <App /> */}
// //     <RouterProvider router={router}></RouterProvider>

// //   </StrictMode>,
// // )

// //---------------------------
// // -------------------------------End:37_2-(1) to (11) --------------------------------
// // -------------------------------Start: 37_4 ---------------------------------------

// import { StrictMode, Suspense } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// // import { createBrowserRouter, RouterProvider } from "react-router";
// import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import Root from './assets/components/Root/Root.jsx';
// import Home from './assets/components/Home/Home.jsx';
// import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
// import Laptops from './assets/components/Laptops/Laptops.jsx';
// import Users from './assets/components/Users/Users.jsx';
// import Users2 from './assets/components/Users2/Users2.jsx';
// // (11)
// const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// const router = createHashRouter([
//   {
//     path: '/',
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: 'mobiles', Component: Mobiles },
//       { path: 'laptops', Component: Laptops },
//       // (2) st 

//       {
//         path: 'users',
//         // (5 st fetch(from json placeholder))
//         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
//         // (5 en) then in Users.jsx file
//         // (4)Component: Users, Users+enter
//         Component: Users
//       },
//       // (2)en then create Users.jsx file creating Users folder in component folder
//       // (8)st
//       {
//         path: 'users2',
//         element: <Suspense fallback={<span>Loading ....</span>}>
//           {/* (10) <Users2 + enter*/}
//           {/* (12) usersPromise={usersPromise} then in Users2.jsx file*/}
//           <Users2 usersPromise={usersPromise}></Users2>

//         </Suspense>
//       },
//       // (8)en then create Users2.jsx file creating Users2 folder in component folder
//       { path: 'about', element: <div>About me here</div> }
//     ]
//   },
//   {
//     path: 'about',
//     element: <div>About me here</div>
//   },
//   {
//     path: 'blogs',
//     element: <div>All my blogs are here</div>
//   },
//   {
//     path: 'app',
//     Component: App
//   },
//   {
//     path: '/app2',
//     // Component: App
//     element: <App></App>
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <RouterProvider router={router}></RouterProvider>

//   </StrictMode>
// );
// // --------------------------
// // Practice:
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// // const router = createBrowserRouter([
// //   // {
// //   //   path: '/',
// //   //   element: <div>Hello from react router</div>
// //   // },

// //   {
// //     path: '/',
// //     Component: Root,
// //     children: [
// //       { index: true, Component: Home },
// //       { path: 'mobiles', Component: Mobiles },
// //       { path: 'laptops', Component: Laptops },
// //       {
// //         path: 'users',
// //         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
// //         Component: Users
// //       },

// //       {
// //         path: 'users2',
// //         element: <Suspense fallback={<span>Loading....</span>}>
// //           <Users2 usersPromise={usersPromise}></Users2>
// //         </Suspense>
// //       },

// //       {
// //         path: 'about',
// //         element: <div>About me here</div>
// //       },
// //     ]
// //   },

// //   {
// //     path: 'blogs',
// //     element: <div>All my blogs are here </div>
// //   },

// //   {
// //     path: 'app',
// //     Component: App
// //   },

// //   {
// //     path: '/app2',
// //     element: <App></App>
// //   }
// // ])

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     {/* <App /> */}
// //     <RouterProvider router={router}></RouterProvider>

// //   </StrictMode>,
// // )

// // -------------------------------End:37_4-(1) to (11) --------------------------------
// // -------------------------------Start: 37_5 ---------------------------------------

// import { StrictMode, Suspense } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// // import { createBrowserRouter, RouterProvider } from "react-router";
// import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import Root from './assets/components/Root/Root.jsx';
// import Home from './assets/components/Home/Home.jsx';
// import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
// import Laptops from './assets/components/Laptops/Laptops.jsx';
// import Users from './assets/components/Users/Users.jsx';
// import Users2 from './assets/components/Users2/Users2.jsx';
// import UserDetails from './assets/components/UserDetails/UserDetails.jsx';

// const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// const router = createHashRouter([
//   {
//     path: '/',
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: 'mobiles', Component: Mobiles },
//       { path: 'laptops', Component: Laptops },
    

//       {
//         path: 'users',
        
//         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        
//         Component: Users
//       },
     
//       {
//         path: 'users2',
//         element: <Suspense fallback={<span>Loading ....</span>}>
          
//           <Users2 usersPromise={usersPromise}></Users2>

//         </Suspense>
//       },
//       // (9)st
//       {
//         path: 'users/:userId',
//         // (15st)
//         loader: ({params}) => fetch('https://jsonplaceholder.typicode.com/users'),
//         // (15en)
//         // (11)st
//         Component: UserDetails
//         // (11)en then in User.jsx file

//       },
//       // (9)en then create UserDetails.jsx file creating UserDetails folder in component folder

//       { path: 'about', element: <div>About me here</div> }
//     ]
//   },
//   {
//     path: 'about',
//     element: <div>About me here</div>
//   },
//   {
//     path: 'blogs',
//     element: <div>All my blogs are here</div>
//   },
//   {
//     path: 'app',
//     Component: App
//   },
//   {
//     path: '/app2',
//     // Component: App
//     element: <App></App>
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <RouterProvider router={router}></RouterProvider>

//   </StrictMode>
// );
// // --------------------------
// // Practice:
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// // const router = createBrowserRouter([
// //   // {
// //   //   path: '/',
// //   //   element: <div>Hello from react router</div>
// //   // },

// //   {
// //     path: '/',
// //     Component: Root,
// //     children: [
// //       { index: true, Component: Home },
// //       { path: 'mobiles', Component: Mobiles },
// //       { path: 'laptops', Component: Laptops },
// //       {
// //         path: 'users',
// //         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
// //         Component: Users
// //       },

// //       {
// //         path: 'users2',
// //         element: <Suspense fallback={<span>Loading....</span>}>
// //           <Users2 usersPromise={usersPromise}></Users2>
// //         </Suspense>
// //       },

// //       {
// //         path: 'users/:userId',
// //         Component: UserDetails
// //       }

// //       {
// //         path: 'about',
// //         element: <div>About me here</div>
// //       },
// //     ]
// //   },

// //   {
// //     path: 'blogs',
// //     element: <div>All my blogs are here </div>
// //   },

// //   {
// //     path: 'app',
// //     Component: App
// //   },

// //   {
// //     path: '/app2',
// //     element: <App></App>
// //   }
// // ])

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     {/* <App /> */}
// //     <RouterProvider router={router}></RouterProvider>

// //   </StrictMode>,
// // )

// // -------------------------------End:37_5-(1) to (12) --------------------------------
// -------------------------------Start: 37_6 ---------------------------------------

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter, RouterProvider } from "react-router";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Root from './assets/components/Root/Root.jsx';
import Home from './assets/components/Home/Home.jsx';
import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
import Laptops from './assets/components/Laptops/Laptops.jsx';
import Users from './assets/components/Users/Users.jsx';
import Users2 from './assets/components/Users2/Users2.jsx';
import UserDetails from './assets/components/UserDetails/UserDetails.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import PostDetail from './assets/components/PostDetail/PostDetail.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
  
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
        
      },
     
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading ....</span>}>
          
          <Users2 usersPromise={usersPromise}></Users2>

        </Suspense>
      },
      
      {
        // path: 'users/:userId',
        
        // loader: ({params}) => fetch('https://jsonplaceholder.typicode.com/users'),
        // Component: UserDetails

        // (1) st commit previous
        path: 'users/:userId',
        // loader: ({params}) => {
        //   // console.log('params inside the loader',params);
        //   // (2)st commit previous
        //   console.log('params inside the loader',params.userId);
        //   // (2)en
        //   fetch('https://jsonplaceholder.typicode.com/users')},

          // (3)st commit (2) 
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

          // (3)en then in UserDetails.jsx
          // (1) en 
          Component: UserDetails
      },
      // (9)st
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      // (9)st then in Posts.jsx file
      // (20)st
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      },
      // (20)en then in postDetail.jsx file
      { path: 'about', element: <div>About me here</div> }
    ]
  },
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

// const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// const router = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element: <div>Hello from react router</div>
//   // },

//   {
//     path: '/',
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: 'mobiles', Component: Mobiles },
//       { path: 'laptops', Component: Laptops },
//       {
//         path: 'users',
//         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
//         Component: Users
//       },
//       {
//         path: 'posts',
//         loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
//         Component: Posts
//       },
//       {
//         path: 'posts/:postId',
//         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
//         Component: PostDetail
//       },

//       {
//         path: 'users2',
//         element: <Suspense fallback={<span>Loading....</span>}>
//           <Users2 usersPromise={usersPromise}></Users2>
//         </Suspense>
//       },

//       {
//         path: 'users/:userId',
//         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
//         Component: UserDetails
//       },
//       {
//         path: 'posts',
//         loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
//         Component: Posts
//       },

//       {
//         path: 'about',
//         element: <div>About me here</div>
//       },
//     ]
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

// -------------------------------End:37_6-(1) to (12) --------------------------------
