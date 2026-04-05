// -------------------------------Start: 37_6 ---------------------------------------
// (8)st
import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    // (10) useLoaderData+enter
    const posts = useLoaderData();
    return (
        <div>
            {/* (11)  <h2>these are my posts:{posts.length} then create Post.jsx file creating Post folder in component*/}
            <h2>these are my posts:{posts.length}</h2>
            {/* (13)st Post+enter*/}
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
            {/* (13)en then Post.jsx file*/}
        </div>
    );
};

export default Posts;
// (8)en then Main.jsx file
//-----------
// Practice:
// import React from 'react';

// const Posts = () => {
//     const posts = useLoaderData();
//     return (
//         <div>
//             <h2>these are my posts:{posts.length}</h2>
//             <div>
//                 {
//                     posts.map(post => <Post key={post.id} post={post}></Post>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Posts;

// -------------------------------End:37_6-(1) to () --------------------------------