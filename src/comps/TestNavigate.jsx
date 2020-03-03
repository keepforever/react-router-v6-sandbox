import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestNavigate = props => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello Test Navigate</h1>
            <button
                onClick={() => {
                    navigate('/home', {
                        state: {
                            foo: 'bar'
                        }
                    });
                }}
                className="btn btn-primary"
            >
                Navigate to Home with state
            </button>
        </div>
    );
};

export default TestNavigate;
