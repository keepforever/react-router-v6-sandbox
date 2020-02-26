import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = props => {
    return (
        <div>
            <h3>Hello About</h3>
            <div style={{ display: 'block', justifyContent: 'flex-start' }}>
                <Link to="/about/chickens">To Chickens</Link> | <Link to="/about/pigs">To About Pigs</Link>
            </div>
            <p>above outlet</p>
            <Outlet />
        </div>
    );
};

export default About;
