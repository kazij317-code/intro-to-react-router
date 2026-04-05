// // -------------------------------Start: 37_6 ---------------------------------------
// // (12) st rsc+enter
// import React from 'react';
// import { Link } from 'react-router';
// // (14) Post = ({post})
// const Post = ({post}) => {
//     // (15)
//     const {id, title} = post
//     return (
//         // (17) style={{border: '2px solid red'}}
//         <div style={{border: '2px solid red'}}>
//             {/* (16)st */}
//             <h3>{title}</h3>
//             {/* (16)en */}
//             {/* (18)st <Link+enter */}
//             <Link to={`/posts/${id}`}>
//                 <button>Show Details</button>
//             </Link>
//             {/* (18)st then create PostDetail.jsx file creating PostDetail folder in component folder*/}
//         </div>
//     );
// };

// export default Post;
// // (12) en then in Posts.jsx file
// // Practice:
// // import React from 'react';

// // const Post = ({post}) => {
// //     const {id, title} = post
// //     return (
// //         <div style = {{border: '2px solid red'}}>
// //             <h3>{title}</h3>
// //             <Link to={`/posts/${id}`}>
// //             <button>Show Details</button>
// //             </Link>
// //         </div>
// //     );
// // };

// // export default Post;
// // -------------------------------End:37_6-(1) to () --------------------------------
// -------------------------------Start: 37_7 ---------------------------------------

import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
   
    const {id, title} = post
    // (3)useNavigate+ enter
    const navigate = useNavigate();
    // (2)st
    const  handleNavigate = () =>{
        // (4)
        // navigate('/')
        // (6)
        // navigate('/laptops')
        // (7) then in postDetail.jsx file
        navigate(`/posts/${id}`)

    }
    // (2)en
    return (
        
        <div style={{border: '2px solid red'}}>
            
            <h3>{title}</h3>
            
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            {/* (1) st*/}
            {/* (5) onClick={handleNavigate}*/}
            <button onClick={handleNavigate}>Details of: {id}</button>
            {/* (1) en*/}
            
        </div>
    );
};

export default Post;

// -------------------------------------
// Practice:
// import React from 'react';

// const Post = ({post}) => {
//     const {id, title} = post
//     const navigate = useNavigate();
//     const handleNavigate = () => {
//         // navigate('/')
//         // navigate('/laptops')
//         navigate(`/posts/${id}`)
//     }
    


//     return (
//         <div style = {{border: '2px solid red'}}>
//             <h3>{title}</h3>
//             <Link to={`/posts/${id}`}>
//             <button>Show Details</button>
//             </Link>
//             <button onClick={handleNavigate}>Details of:{id}</button>
//         </div>
//     );
// };

// export default Post;
// -------------------------------End:37_7-(1) to () --------------------------------