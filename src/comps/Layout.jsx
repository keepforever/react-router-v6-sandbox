import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = props => {
    return <div className="p-4" style={{ border: '3px solid blue' }}>
        <Outlet />
    </div>;
};

export default Layout;
