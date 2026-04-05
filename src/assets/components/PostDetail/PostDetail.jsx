// -------------------------------Start: 37_6 ---------------------------------------
// (19)st rsc+enter
import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    // (21)st
    const post = useLoaderData();
    console.log(post);
    const {title, body} = post;//destructure bad dile post.title, post.body dite hobe 
    // (21)en
    return (
        <div>
            <h3>Post Detail here</h3>
            {/* (22)st */}
            <h5>{title}</h5>
            <p>{body}</p>
            {/* (22)en */}

        </div>
    );
};

export default PostDetail;

// (19)en then Main.jsx file
// Practice:
// import React from 'react';

// const PostDetail = () => {
//     const post = useLoaderData()
//     console.log(post);
//     const {title, body} = post
    
//     return (
//         <div>
//             <h5>{title}</h5>
//             <p>{body}</p>
//         </div>
//     );
// };

// export default PostDetail;
// -------------------------------End:37_6-(1) to () --------------------------------