import React from 'react';
import { useParams } from 'react-router-dom';

const SpecificThing = props => {
    let { id } = useParams();
    return (
        <div>
            <h1>Hello SpecificThing "{id}"</h1>
            <p>
                "{id}" pulled from url via <code>useParams()</code>
            </p>
        </div>
    );
};

export default SpecificThing;
