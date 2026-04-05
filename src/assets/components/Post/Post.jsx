// -------------------------------Start: 37_6 ---------------------------------------
// (12) st rsc+enter
import React from 'react';
import { Link } from 'react-router';
// (14) Post = ({post})
const Post = ({post}) => {
    // (15)
    const {id, title} = post
    return (
        // (17) style={{border: '2px solid red'}}
        <div style={{border: '2px solid red'}}>
            {/* (16)st */}
            <h3>{title}</h3>
            {/* (16)en */}
            {/* (18)st <Link+enter */}
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            {/* (18)st then create PostDetail.jsx file creating PostDetail folder in component folder*/}
        </div>
    );
};

export default Post;
// (12) en then in Posts.jsx file
// Practice:
// import React from 'react';

// const Post = ({post}) => {
//     const {id, title} = post
//     return (
//         <div style = {{border: '2px solid red'}}>
//             <h3>{title}</h3>
//             <Link to={`/posts/${id}`}>
//             <button>Show Details</button>
//             </Link>
//         </div>
//     );
// };

// export default Post;
// -------------------------------End:37_6-(1) to () --------------------------------