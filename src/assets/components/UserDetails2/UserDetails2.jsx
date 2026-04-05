// -------------------------------Start: 37_8 ---------------------------------------
// (6)st
import React, { use } from 'react';
// (10) UserDetails2 = ({userPromise})
const UserDetails2 = ({userPromise}) => {
    // (11)st
    const {name, username} = use(userPromise);
    console.log('userDetails2', name, username);
    // (11)en
    
    return (
        <div>
            {/* (12)st */}
            <p><small>user Name: {username}</small></p>
            <p>{name}</p>
            {/* (12)en then Main.jsx file*/}
        </div>
    );
};

export default UserDetails2;
// (6)en then User.jsx file
// ---------------------------
// Practice:
// import React from 'react';

// const UserDetails2 = ({userPromise}) => {
//     const{name, username} = use(userPromise);
//     console.log('userDetails2', name, username);
    
//     return (
//         <div>
//             <p><small>user Name: {username}</small></p>
//             <p>{name}</p>
//         </div>
//     );
// };

// export default UserDetails2;

// -------------------------------End:37_8-(1) to (11) --------------------------------

