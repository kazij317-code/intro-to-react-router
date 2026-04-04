// -------------------------------Start: 38_4 ---------------------------------------
// (9)st rsc+enter
import React, { use } from 'react';
// (13)Users2 = ({usersPromise})
const Users2 = ({usersPromise}) => {
    // (14)st use+enter
    const users = use(usersPromise)
    console.log('users 2 suspense data load', users);
    // (14)en
    return (
        <div>
            <h2>This is User2</h2>
        </div>
    );
};

export default Users2;

// (9)en then in Main.jsx file
//----------------------------------
// Practice:
// import React from 'react';

// const Users2 = ({usersPromise}) => {
//     const users = use(userPromise)
//     console.log('users 2 suspense data load', users);


    
//     return (
//         <div>
//             <h2>This is Users2</h2>
//         </div>
//     );
// };

// export default Users2;


// -------------------------------End:38_4-(1) to (11) --------------------------------
