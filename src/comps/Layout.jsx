import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = props => {
    return (
        <div className="p-4" style={{ border: '3px solid blue' }}>
            <div style={{ display: 'block', justifyContent: 'flex-start' }}>
                <Link to="/home">Home</Link> | <Link to="about">About</Link> | <Link to="things">Things</Link> |{' '}
                <Link to="protected">Protected</Link> |
            </div>
            <h4 className="pt-3">Hello Layout Component</h4>
            <p>click one of the links</p>
            <Outlet />
        </div>
    );
};

export default Layout;
