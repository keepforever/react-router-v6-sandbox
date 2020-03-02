import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SpecificThing = props => {
    console.group('SpecificThing');
    console.log('\n', '\n', `props = `, props, '\n', '\n');
    console.groupEnd();
    const params = useParams();
    console.log('\n', '\n', `params = `, params, '\n', '\n');
    let { id } = useParams();
    return (
        <div>
            <h1>Hello SpecificThing "{id}"</h1>
            <p>
                "{id}" pulled from url via <code>useParams()</code>
            </p>
            <Link to="/home">Take Me Home</Link>
        </div>
    );
};

export default SpecificThing;
