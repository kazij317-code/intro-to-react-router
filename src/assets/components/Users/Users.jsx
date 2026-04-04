// // -------------------------------Start: 37_4 ---------------------------------------
// // (3) st rsc+enter
// import React from 'react';
// import { useLoaderData } from 'react-router';

// const Users = () => {
//     // (6) st
//     const users = useLoaderData();
//     console.log(users);
    
//     // (6) en then in Header.jsx file
//     return (
//         <div>
//             <h2>This is Users Page</h2>
//         </div>
//     );
// };

// export default Users;
// // (3) en rsc+enter then in main.jsx file
// // ---------------------------
// // Practice:
// // import React from 'react';

// // const Users = () => {
// //     const users = useLoaderData();
// //     console.log(users);


    
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // };

// // export default Users;

// // -------------------------------End:37_4-(1) to (11) --------------------------------
// -------------------------------Start: 37_5 ---------------------------------------

import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h2>This is Users Page</h2>
            {/* (1) st */}
            <div>
                {
                    // (3)User+enter then in User.jsx file
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            {/* (1) en then create User.jsx file creating User folder in component folder */}
        </div>
    );
};

export default Users;

// ---------------------------
// Practice:
// import React from 'react';

// const Users = () => {
//     const users = useLoaderData();
//     console.log(users);

//     return (
//         <div>
//             <h2>This is user page</h2>
//             <div>
//                 {
//                     users.map(user => <User key={user.id} user={user}></User>)
//                 }

//             </div>
//         </div>
//     );
// };

// export default Users;

// -------------------------------End:37_5-(1) to (11) --------------------------------