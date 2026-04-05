// // -------------------------------Start: 37_5 ---------------------------------------
// // (10)st rsc+enter
// import React from 'react';

// const UserDetails = () => {
//     return (
//         <div>
//             <h3>User Details here</h3>
//         </div>
//     );
// };

// export default UserDetails;
// // (10)en then Main.jsx file
// // ----------------------------
// // Practice:
// // import React from 'react';

// // const UserDetails = () => {
// //     return (
// //         <div>
// //             <h3>User Details here</h3>
// //         </div>
// //     );
// // };

// // export default UserDetails;

// // -------------------------------End:37_5-(1) to (11) --------------------------------
// -------------------------------Start: 37_6 ---------------------------------------

// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const UserDetails = () => {
//     // (4)st useLoaderData +enter
//     const user = useLoaderData();
//     console.log(user);
//     // (4)en
    
    

//     // (5)
//     const {name, website} = user;
//     return (
//         <div>
//             <h3>User Details here</h3>
//             {/* (6) st*/}
//             <h5>Name: {name}</h5>
//             <p>Website: {website}</p>
//             {/* (6) st then in Header.jsx file*/}
//         </div>
//     );
// };

// export default UserDetails;

// ----------------------------
// Practice:
// import React from 'react';

// const UserDetails = () => {
//     const user = useLoaderData();
//     console.log(user);
//     const {name, website} = user;
    
//     return (
//         <div>
//             <h3>User Details here</h3>
//             <h5>Name:{name}</h5>
//             <p>Website:{website}</p>
//         </div>
//     );
// };

// export default UserDetails;

// -------------------------------End:37_6-(1) to (11) --------------------------------
// -------------------------------Start: 37_7 ---------------------------------------

import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    
    const user = useLoaderData();
    // console.log(user);
   
    // (12)st
    // const params = useParams();
    // // console.log(params);
    // // (13)
    // console.log(params.userId);
    // (12)en
    //  (14) st or with (12)
        const {userId} = useParams();
        console.log(userId);
    // (14) en
    
    const {name, website} = user;
    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;

// ----------------------------
// Practice:
// import React from 'react';

// const UserDetails = () => {
//     const user = useLoaderData();
//     console.log(user);
//     const {name, website} = user;
    
//     const params = useParams()
//     console.log(params.userId);

//     const {userId} = useParams();
//     console.log(userId);
    

//     return (
//         <div>
//             <h3>User Details here</h3>
//             <h5>Name:{name}</h5>
//             <p>Website:{website}</p>
//         </div>
//     );
// };

// export default UserDetails;

// -------------------------------End:37_7-(1) to (14) --------------------------------