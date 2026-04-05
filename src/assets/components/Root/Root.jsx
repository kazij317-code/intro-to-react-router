// // -------------------------------Start: 38_2 ---------------------------------------
// // (2)st rsc+enter
// import React from 'react';
// import Header from '../Header/Header';
// import { Outlet } from 'react-router';

// const Root = () => {
//     return (
//         <div>
//             {/* (4) <Header+enter */}
//             <Header></Header>
//             {/* (5)<Outlet+enter then in main.jsx file*/}
//             <Outlet></Outlet>
            
//         </div>
//     );
// };

// export default Root;
// // (2)en then create Header.jsx file creating Header file in component folder

// // Practice:
// // import React from 'react';
// // import Header from '../Header/Header';
// // import { Outlet } from 'react-router';

// // const Root = () => {
// //     return (
// //         <div>
// //             <Header></Header>
// //             <Outlet></Outlet>
// //         </div>
// //     );
// // };

// // export default Root;

// // -------------------------------End:38_2-(1) to () --------------------------------
// // -------------------------------Start: 38_3 ---------------------------------------

// import React from 'react';
// import Header from '../Header/Header';
// import { Outlet } from 'react-router';
// import Footer from '../Footer/Footer';
// import Sidebar from '../Sidebar/Sidebar';
// // (13)
// import './Root.css';

// const Root = () => {
//     return (
//         <div>
//             <Header></Header>
//             {/* (8)st */}
//             {/* (14) className='.root-main' then in Header.jsx file*/}
//             <div className='root-main'>
//                 {/* (11)st <Sidebar+enter and enter <Outlet in div*/}
//                     <Sidebar></Sidebar>
//                     <Outlet></Outlet>
//                 {/* (11)en then create Root.css file in Root folder*/}
//             </div>
//             {/* (8)en then create Sidebar.jsx file creating Sidebar folder in component folder*/}
//             {/* <Outlet></Outlet> */}
//             {/* (6) <Footer+enter then in Footer.jsx file*/}
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Root;


// // Practice:
// // import React from 'react';
// // import Header from '../Header/Header';
// // import { Outlet } from 'react-router';

// // const Root = () => {
// //     return (
// //         <div className='root-main'>
// //             <Header></Header>
// //             <div>
// //                 <Sidebar></Sidebar>
// //                 <Outlet></Outlet>
// //             </div>
            
// //             <Footer></Footer>
// //         </div>
// //     );
// // };

// // export default Root;

/**
 * 1. use: userPromise > Suspense > promise > use(userPromise)
 * 2. [less used so far] > useState + useEffect ( () =>{}, [])
 * 3. set loader in the route definition: load data before router component is rendered
*/

// // -------------------------------End:37_3-(1) to () --------------------------------
// -------------------------------Start: 37_7 ---------------------------------------
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

import './Root.css';
import { useNavigation } from 'react-router';

const Root = () => {
    // (10)st useNavigation + enter
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    // (10)en
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                    <Sidebar></Sidebar>
                    {/* (11)st */}
                    {isNavigating && <span>Loading...</span>}
                    {/* (11)en then UserDetails.jsx*/}

                    <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

//-----------------------------------
// Practice:
// import React from 'react';
// import Header from '../Header/Header';
// import { Outlet } from 'react-router';

// const Root = () => {
//     const navigation = useNavigation();
//     const isNavigating = Boolean(navigation.location);
//     return (
//         <div className='root-main'>
//             <Header></Header>
//             <div>
//                 <Sidebar></Sidebar>
//                 {isNavigating && <span>Loading...</span>}
//                 <Outlet></Outlet>
//             </div>
            
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Root;

// -------------------------------End:38_7-(1) to () --------------------------------

