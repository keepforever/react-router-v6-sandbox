import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const things = ['thing-one', 'thing-two', 'thing-three'];

const Things = props => {
    return (
        <div>
            <h2>Hello Things</h2>
            <div>
                {things.map(t => {
                    return (
                        <Link style={{marginRight: '25px'}} to={`${t}`} key={Math.random() + '_fun'}>
                            {t}{' '}
                        </Link>
                    );
                })}
            </div>
            <p>above things outlet</p>
            <Outlet />
        </div>
    );
};

export default Things;
