import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
    // const navigate = useNavigate();

    console.group('ProtectedRoute');
    console.log('\n', '\n', `location = `, location, '\n', '\n');
    console.log('\n', '\n', `rest.isAllowed = `, rest.isAllowed, '\n', '\n');
    console.groupEnd();

    if (rest.isAllowed) {
        console.log('\n', `hello if true `, '\n');
        return <Route {...rest} element={<Component {...rest} />} />;
    } else {
        console.log('\n', `hello else `, '\n');
        return <Navigate to="/home" replace state={{ from: location }} />;
    }
};

export default ProtectedRoute;

// const Boiler = ({ component: Component, ...rest }) => {
//     const { state } = useContext(AuthContext);
//     return (
//         <Route
//             {...rest}
//             element={props => {
//                 return state.user ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: '/login',
//                             state: { from: props.location }
//                         }}
//                     />
//                 );
//             }}
//         />
//     );
// };
