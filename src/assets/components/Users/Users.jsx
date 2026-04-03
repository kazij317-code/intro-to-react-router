// -------------------------------Start: 38_4 ---------------------------------------
// (3) st rsc+enter
import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    // (6) st
    const users = useLoaderData();
    console.log(users);
    
    // (6) en then in Header.jsx file
    return (
        <div>
            <h2>This is Users Page</h2>
        </div>
    );
};

export default Users;
// (3) en rsc+enter then in main.jsx file
// ---------------------------
// Practice:
// import React from 'react';

// const Users = () => {
//     const users = useLoaderData();
//     console.log(users);
    
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Users;

// -------------------------------End:38_4-(1) to (11) --------------------------------