import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../components/page/admin';
import Menu from '../components/page/menu';
import Order from '../components/page/order';

const MainRoutes = () => {
    let PUBLIC = [ 
        {
            Link: "/",
            element: <Menu/>,
            id: 1
        },
        {
            Link: "/Admin",
            element: <Admin/>,
            id: 2
        },
        {
            Link: "/Order",
            element: <Order/>,
            id: 3
        }
    ];
    return (
        <div>
            <Routes>
               {PUBLIC.map((el)=>(<Route path={el.Link} element = {el.element} key={el.id}/>))}
            </Routes>
        </div>
    );
};

export default MainRoutes;