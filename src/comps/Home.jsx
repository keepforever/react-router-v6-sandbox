import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = props => {
    const location = useLocation();
    console.group('Home.jsx');
    console.log('\n', '\n', `location = `, location, '\n', '\n');
    console.groupEnd();
    return (
        <div className="mt-4">
            <h3>Hello Home</h3>
        </div>
    );
};

export default Home;
