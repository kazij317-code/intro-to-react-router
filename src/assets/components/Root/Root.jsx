// -------------------------------Start: 38_2 ---------------------------------------
// (2)st rsc+enter
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            {/* (4) <Header+enter */}
            <Header></Header>
            {/* (5)<Outlet+enter then in main.jsx file*/}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;
// (2)en then create Header.jsx file creating Header file in component folder


// -------------------------------End:38_2-(1) to () --------------------------------