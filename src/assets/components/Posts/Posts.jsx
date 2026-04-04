// -------------------------------Start: 37_6 ---------------------------------------
// (8)st
import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    // (10) useLoaderData+enter
    const posts = useLoaderData();
    return (
        <div>
            {/* (11)  <h2>these are my posts:{posts.length}*/}
            <h2>these are my posts:{posts.length}</h2>
        </div>
    );
};

export default Posts;
// (8)en then Main.jsx file

// -------------------------------End:37_6-(1) to () --------------------------------