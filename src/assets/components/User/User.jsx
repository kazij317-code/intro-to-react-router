// -------------------------------Start: 37_5 ---------------------------------------
// (2)st rsc+ enter
import React from 'react';
import { Link } from 'react-router';
// (4) User = ({user})
const User = ({user}) => {
    // (5st)
    // (13) const {id,
    const { id, name, email, phone } = user;
    // (5en)

    // (7) st
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    // (7) en

    return (
        // (8) style={userStyle} then in Main.jsx file
        <div style={userStyle}>
            {/* (6)st */}
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            {/* (6)en */}
            {/* (12) <Link+enter*/}
            {/* (14) Link to={`/users/${id}`}> then in Main.jsx file*/}
            <Link to={`/users/${id}`}>Show Details</Link>

        </div>
    );
};

export default User;
// (2)en then in Users.jsx file
// --------------------------------
// Practice:
// import React from 'react';

// const User = ({user}) => {
//     const {id, name, email, phone} = user;
//     const userStyle = {
//         border: '2px solid yellow',
//         borderRadius: '20px',
//         padding: '10px',
//         margin: '10px'
//     }

//     return (
//         <div style={userStyle}>
//             <h3>{name}</h3>
//             <p>Email: {email}</p>
//             <p><small>Phone: {phone}</small></p>
//             <Link to={`/user/${id}`}>Show Details</Link>
//         </div>
//     );
// };

// export default User;



// -------------------------------End:37_5-(1) to (11) --------------------------------