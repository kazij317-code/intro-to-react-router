// // -------------------------------Start: 37_6 ---------------------------------------
// // (19)st rsc+enter
// import React from 'react';
// import { useLoaderData } from 'react-router';

// const PostDetail = () => {
//     // (21)st
//     const post = useLoaderData();
//     console.log(post);
//     const {title, body} = post;//destructure bad dile post.title, post.body dite hobe 
//     // (21)en
//     return (
//         <div>
//             <h3>Post Detail here</h3>
//             {/* (22)st */}
//             <h5>{title}</h5>
//             <p>{body}</p>
//             {/* (22)en */}

//         </div>
//     );
// };

// export default PostDetail;

// // (19)en then Main.jsx file
// // Practice:
// // import React from 'react';

// // const PostDetail = () => {
// //     const post = useLoaderData()
// //     console.log(post);
// //     const {title, body} = post
    
// //     return (
// //         <div>
// //             <h5>{title}</h5>
// //             <p>{body}</p>
// //         </div>
// //     );
// // };

// // export default PostDetail;
// // -------------------------------End:37_6-(1) to () --------------------------------
// -------------------------------Start: 37_7 ---------------------------------------

import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {

    const post = useLoaderData();
    console.log(post);
    const {title, body} = post;//destructure bad dile post.title, post.body dite hobe 
    // (8)useNavigate+enter
    const navigate = useNavigate();
    
    return (
        <div>
            <h3>Post Detail here</h3>
            
            <h5>{title}</h5>
            <p>{body}</p>
            {/* (9)st */}
            <button onClick={() => navigate(-1)}>Go Back</button>
            {/* (9)en then in Root.jsx file */}

            

        </div>
    );
};

export default PostDetail;


// --------------------------------
// Practice:
// import React from 'react';

// const PostDetail = () => {
//     const post = useLoaderData()
//     console.log(post);
//     const {title, body} = post
//     const navigate = useNavigate();
    
//     return (
//         <div>
//             <h5>{title}</h5>
//             <p>{body}</p>
//             <button onClick={() => navigate(-1)}>Go Back</button>
//         </div>
//     );
// };

// export default PostDetail;
// -------------------------------End:37_7-(1) to () --------------------------------