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
// -------------------------------Start: 38_3 ---------------------------------------

import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            {/* (1)st */}
            <nav>
                {/* a*4 */}
                {/* <a href="/">Home</a>
                <a href="#/mobiles">Mobiles</a>
                <a href="#/laptops">Laptops</a>
                <a href="#/about">About Us</a>
                <a href="#/blogs">Blogs</a>
                <a href="#/app">App</a>
                <a href="#/app2">APP2</a> */}
            {/* (2)st Commit previous and <Link+enter  */}
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/about">About Us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/app">App</Link>
                <Link to="/app2">APP2</Link>

            {/* (2)en */}


            </nav>
            {/* (1)en */}

            
            
        </div>
    );
};

export default Header;


// --------
// // Practice:
// import React from 'react';

// const Header = () => {
//     return (
//         <div>
//             <h3>This is header</h3>
//         </div>
//     );
// };

// export default Header;
// -------------------------------End:38_3-(1) to () --------------------------------