// // -------------------------------Start: 37_5 ---------------------------------------
// // (2)st rsc+ enter
// import React from 'react';
// import { Link } from 'react-router';
// // (4) User = ({user})
// const User = ({user}) => {
//     // (5st)
//     // (13) const {id,
//     const { id, name, email, phone } = user;
//     // (5en)

//     // (7) st
//     const userStyle = {
//         border: '2px solid yellow',
//         borderRadius: '20px',
//         padding: '10px',
//         margin: '10px'
//     }
//     // (7) en

//     return (
//         // (8) style={userStyle} then in Main.jsx file
//         <div style={userStyle}>
//             {/* (6)st */}
//             <h3>{name}</h3>
//             <p>Email: {email}</p>
//             <p><small>Phone: {phone}</small></p>
//             {/* (6)en */}
//             {/* (12) <Link+enter*/}
//             {/* (14) Link to={`/users/${id}`}> then in Main.jsx file*/}
//             <Link to={`/users/${id}`}>Show Details</Link>

//         </div>
//     );
// };

// export default User;
// // (2)en then in Users.jsx file
// // --------------------------------
// // Practice:
// // import React from 'react';

// // const User = ({user}) => {
// //     const {id, name, email, phone} = user;
// //     const userStyle = {
// //         border: '2px solid yellow',
// //         borderRadius: '20px',
// //         padding: '10px',
// //         margin: '10px'
// //     }

// //     return (
// //         <div style={userStyle}>
// //             <h3>{name}</h3>
// //             <p>Email: {email}</p>
// //             <p><small>Phone: {phone}</small></p>
// //             <Link to={`/user/${id}`}>Show Details</Link>
// //         </div>
// //     );
// // };

// // export default User;



// // -------------------------------End:37_5-(1) to (11) --------------------------------
// // -------------------------------Start: 37_8 ---------------------------------------
// import React, { Suspense, useState } from 'react';
// import { Link } from 'react-router';
// import UserDetails2 from '../UserDetails2/UserDetails2';

// const User = ({user}) => {
// // (2) useState +enter
//     const [showInfo, setShowInfo] = useState(false);
   
//     const { id, name, email, phone } = user;
//     // (8)
//     const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
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
//             <Link to={`/users/${id}`}>Show Details</Link>
//             {/* (1) */}
//             {/* <button>Detail info</button> */}
//             {/* (3) commit (1)*/}
//             {/* <button>{showInfo ? 'Hide' : 'Show'} info</button> */}
//             {/* (4)st commit (3) */}
//             <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} info</button>
//             {/* (4)en */}
//             {/* (5)st <Suspense +enter */}
//             {
//                 showInfo && <Suspense fallback={<span>Loading...</span>}>
//                 {/* (7) <UserDetails2 + Enter*/}
//                 {/* (9) userPromise={userPromise}  then in UserDetails2.jsx file*/}
//                 <UserDetails2 userPromise={userPromise}></UserDetails2>
//                 </Suspense>
//             }
//             {/* (5)en then create UserDetails2.jsx file creating UserDetails2 folder in component folder*/}
//         </div>
//     );
// };

// export default User;

// // --------------------------------
// // Practice:
// // import React from 'react';

// // const User = ({user}) => {
// //     const [showInfo, setShowInfo] = useState(false);

// //     const {id, name, email, phone} = user;
// //     const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
// //     const userStyle = {
// //         border: '2px solid yellow',
// //         borderRadius: '20px',
// //         padding: '10px',
// //         margin: '10px'
// //     }

// //     return (
// //         <div style={userStyle}>
// //             <h3>{name}</h3>
// //             <p>Email: {email}</p>
// //             <p><small>Phone: {phone}</small></p>
// //             <Link to={`/user/${id}`}>Show Details</Link>
            
// //             <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} info</button>
// //             {
// //                 showInfo && <Suspense fallback={<span>Loading....</span>}>
// //                     <UserDetails2 userPromise={userPromise}></UserDetails2>
// //                 </Suspense>
// //             }
// //         </div>
// //     ); 
// // };

// // export default User;

// // -------------------------------End:37_8-(1) to (11) --------------------------------
// -------------------------------Start: 37_9 ---------------------------------------
import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const [showInfo, setShowInfo] = useState(false);
    // (1)
    const [visitHome, setVisitHome] = useState(false);
    // (4)st
    const location = useLocation();
    console.log(location);
    // (4)en
    
    const { id, name, email, phone } = user;
  
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    // (3)st
    if(visitHome){
        return <Navigate to='/'></Navigate>
    }
    // (3)en
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            {/* (2) */}
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
           
        </div>
    );
};

export default User;

// --------------------------------
// Practice:
// import React from 'react';

// const User = ({user}) => {
//     const [showInfo, setShowInfo] = useState(false);
    
//     const [visitHome, setVisitHome] = useState(false);

//     const location = useLocation();
//     console.log(location);
     

//     const {id, name, email, phone} = user;
//     const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
//     const userStyle = {
//         border: '2px solid yellow',
//         borderRadius: '20px',
//         padding: '10px',
//         margin: '10px'
//     }
//     if(visitHome){
//         return <Navigate to='/'></Navigate>
//     }

//     return (
//         <div style={userStyle}>
//             <h3>{name}</h3>
//             <p>Email: {email}</p>
//             <p><small>Phone: {phone}</small></p>
//             <Link to={`/user/${id}`}>Show Details</Link>
            
//             <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} info</button>
//             {
//                 showInfo && <Suspense fallback={<span>Loading....</span>}>
//                     <UserDetails2 userPromise={userPromise}></UserDetails2>
//                 </Suspense>
//             }
//             <button onClick={() => setVisitHome(true)}>Visit Home</button>
//         </div>
//     ); 
// };

// export default User;

// -------------------------------End:37_9-(1) to (11) --------------------------------