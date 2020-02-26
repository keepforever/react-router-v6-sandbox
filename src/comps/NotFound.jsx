import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = props => {
    const navigate = useNavigate();
    const location = useLocation();
    React.useEffect(() => {
        setTimeout(() => {
            navigate('/home');
        }, 3000);
    });
    return (
        <div>
            <h3>Hello NotFound</h3>
            <h4>path {location.pathname} not found</h4>
            <p>You will be redirected in a few seconds.</p>
        </div>
    );
};

export default NotFound;
