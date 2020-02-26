import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SpecificThing = props => {
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
