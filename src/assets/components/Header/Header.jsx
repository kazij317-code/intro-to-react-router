// // -------------------------------Start: 38_2 ---------------------------------------
// // (3)st rsc+enter
// import React from 'react';

// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//         </div>
//     );
// };

// export default Header;
// // (3)en then in Root.jsx file

// // --------
// // // Practice:
// // import React from 'react';

// // const Header = () => {
// //     return (
// //         <div>
// //             <h3>This is header</h3>
// //         </div>
// //     );
// // };

// // export default Header;
// // -------------------------------End:38_2-(1) to () --------------------------------
// // -------------------------------Start: 38_3 ---------------------------------------

// import React from 'react';
// import { Link, NavLink } from 'react-router';
// // (4) then create Footer.jsx file creating Footer folder in component folder 
// import './Header.css';


// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//             {/* (1)st */}
//             <nav>
//                 {/* a*4 */}
//                 {/* <a href="/">Home</a>
//                 <a href="#/mobiles">Mobiles</a>
//                 <a href="#/laptops">Laptops</a>
//                 <a href="#/about">About Us</a>
//                 <a href="#/blogs">Blogs</a>
//                 <a href="#/app">App</a>
//                 <a href="#/app2">APP2</a> */}
//             {/* (2)st Commit previous and <Link+enter  link use korle # lage na*/}
//                 {/* <Link to="/">Home</Link>
//                 <Link to="/mobiles">Mobiles</Link>
//                 <Link to="/laptops">Laptops</Link>
//                 <Link to="/about">About Us</Link>
//                 <Link to="/blogs">Blogs</Link>
//                 <Link to="/app">App</Link>
//                 <Link to="/app2">APP2</Link> */}
               
//             {/* (2)en then create Header.css file in Header folder */}
//              {/* (15)st commit (2) and create new, <NavLink+enter ctrl+d for select all*/}
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/mobiles">Mobiles</NavLink>
//                 <NavLink to="/laptops">Laptops</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <NavLink to="/blogs">Blogs</NavLink>
//                 <NavLink to="/app">App</NavLink>
//                 <NavLink to="/app2">APP2</NavLink>
//             {/* (15)en then in Root.css file*/}

//             </nav>
//             {/* (1)en */}
            
//         </div>
//     );
// };

// export default Header;


// // // --------
// // Practice:
// import React from 'react';
// import { Link, NavLink } from 'react-router';
// import './Header.css'

// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//             <nav>
//                 {/* <a href="/">Home</a>
//                 <a href="#/mobiles">Mobiles</a>
//                 <a href="#/laptops">Laptops</a>
//                 <a href="#/about">About Us</a>
//                 <a href="#/blogs">Blogs</a>
//                 <a href="#/app">App</a>
//                 <a href="#/app2">App2</a> */}

//                 {/* <Link to="/">Home</Link>
//                 <Link to="/mobiles">Mobiles</Link>
//                 <Link to="/laptops">Laptops</Link>
//                 <Link to="/about">About Us</Link>
//                 <Link to="/blogs">Blogs</Link>
//                 <Link to="/app">App</Link>
//                 <Link to="/app2">App2</Link> */}

//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/mobiles">Mobiles</NavLink>
//                 <NavLink to="/laptops">Laptops</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <NavLink to="/blogs">Blogs</NavLink>
//                 <NavLink to="/app">App</NavLink>
//                 <NavLink to="/app2">App2</NavLink>
//             </nav>
//         </div>
//     );
// };

// export default Header;
// // // -------------------------------End:38_3-(1) to () --------------------------------
// // -------------------------------Start: 38_4 ---------------------------------------
// import React from 'react';
// import { Link, NavLink } from 'react-router';

// import './Header.css';

// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//             <nav>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/mobiles">Mobiles</NavLink>
//                 <NavLink to="/laptops">Laptops</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <NavLink to="/blogs">Blogs</NavLink>
//                 <NavLink to="/app">App</NavLink>
//                 <NavLink to="/app2">APP2</NavLink>
//                 {/* (1) then in Main.jsx file*/}
//                 <NavLink to="/users">Users</NavLink>
//                 {/* (7) then Main.jsx file*/}
//                 <NavLink to="/users2">Users2</NavLink>
//             </nav>          
//         </div>
//     );
// };

// export default Header;
// // --------
// // Practice:
// // import React from 'react';
// // import { Link, NavLink } from 'react-router';
// // import './Header.css'

// // const Header = () => {
// //     return (
// //         <div>
// //             <h3>This is header</h3>
// //             <nav>
// //                 {/* <a href="/">Home</a>
// //                 <a href="#/mobiles">Mobiles</a>
// //                 <a href="#/laptops">Laptops</a>
// //                 <a href="#/about">About Us</a>
// //                 <a href="#/blogs">Blogs</a>
// //                 <a href="#/app">App</a>
// //                 <a href="#/app2">App2</a> */}

// //                 {/* <Link to="/">Home</Link>
// //                 <Link to="/mobiles">Mobiles</Link>
// //                 <Link to="/laptops">Laptops</Link>
// //                 <Link to="/about">About Us</Link>
// //                 <Link to="/blogs">Blogs</Link>
// //                 <Link to="/app">App</Link>
// //                 <Link to="/app2">App2</Link> */}

// //                 <NavLink to="/">Home</NavLink>
// //                 <NavLink to="/mobiles">Mobiles</NavLink>
// //                 <NavLink to="/laptops">Laptops</NavLink>
// //                 <NavLink to="/about">About Us</NavLink>
// //                 <NavLink to="/blogs">Blogs</NavLink>
// //                 <NavLink to="/app">App</NavLink>
// //                 <NavLink to="/app2">App2</NavLink>
// //                 <NavLink to="/users">Users</NavLink>
// //                 <NavLink to="/users2">Users2</NavLink>
// //             </nav>
// //         </div>
// //     );
// // };

// // export default Header;
// // -------------------------------End:37_4-(1) to () --------------------------------
// -------------------------------Start: 37_6 ---------------------------------------
import React from 'react';
import { Link, NavLink } from 'react-router';

import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/app">App</NavLink>
                <NavLink to="/app2">APP2</NavLink> 
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                {/* (7) then create Posts.jsx file creating Posts file in component folder*/}
                <NavLink to="/posts">Posts</NavLink>
            </nav>          
        </div>
    );
};

export default Header;
// --------
// Practice:
// import React from 'react';
// import { Link, NavLink } from 'react-router';
// import './Header.css'

// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//             <nav>
//                 {/* <a href="/">Home</a>
//                 <a href="#/mobiles">Mobiles</a>
//                 <a href="#/laptops">Laptops</a>
//                 <a href="#/about">About Us</a>
//                 <a href="#/blogs">Blogs</a>
//                 <a href="#/app">App</a>
//                 <a href="#/app2">App2</a> */}

//                 {/* <Link to="/">Home</Link>
//                 <Link to="/mobiles">Mobiles</Link>
//                 <Link to="/laptops">Laptops</Link>
//                 <Link to="/about">About Us</Link>
//                 <Link to="/blogs">Blogs</Link>
//                 <Link to="/app">App</Link>
//                 <Link to="/app2">App2</Link> */}

//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/mobiles">Mobiles</NavLink>
//                 <NavLink to="/laptops">Laptops</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <NavLink to="/blogs">Blogs</NavLink>
//                 <NavLink to="/app">App</NavLink>
//                 <NavLink to="/app2">App2</NavLink>
//                 <NavLink to="/users">Users</NavLink>
//                 <NavLink to="/users2">Users2</NavLink>
//             </nav>
//         </div>
//     );
// };

// export default Header;
// -------------------------------End:37_6-(1) to () --------------------------------