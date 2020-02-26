import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProtectedPageAlpha = props => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Hello ProtectedPageAlpha</h3>
            <button onClick={() => { navigate(-1) }} className="btn btn-primary">
                Navigate Back 1
            </button>
        </div>
    );
};

export default ProtectedPageAlpha;
