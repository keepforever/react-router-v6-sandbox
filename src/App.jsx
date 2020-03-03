import React from 'react';
import { Routes, Route, Link, Redirect } from 'react-router-dom';
// locals
import Layout from './comps/Layout';
import Home from './comps/Home';
import About from './comps/About';
import AboutChickens from './comps/AboutChickens';
import AboutPigs from './comps/AboutPigs';
import Things from './comps/Things';
import SpecificThing from './comps/SpecificThing';
import TestThing from './comps/TestThing';
import ProtectedPageAlpha from './comps/ProtectedPageAlpha';

import ProtectedRoute from './comps/ProtectedRoute';
import NotFound from './comps/NotFound';
import TestNavigate from './comps/TestNavigate';

const App = props => {
    const [isAllowed, setIsAllowed] = React.useState(false);
    console.group('App.jsx');
    console.log('\n', '\n', `isAllowed = `, isAllowed, '\n', '\n');
    console.groupEnd();
    return (
        <div style={{ padding: '40px' }}>
            <div className="row mb-4 middle-xs">
                <div className="col-xs-2">
                    <button
                        className="btn btn-primary mr-3"
                        onClick={() => {
                            setIsAllowed(b => !b);
                        }}
                    >
                        Toggle isAllowed
                    </button>
                </div>
                <div className="col-xs-2 center-xs">
                    <code>isAllowed = {isAllowed ? 'true' : 'false'}</code>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route path="home" element={<Home />} /> */}
                    <Route path="home" element={<Home {...props} />} />
                    <ProtectedRoute path="protected" isAllowed={isAllowed} component={ProtectedPageAlpha} />
                    <Route path="about" element={<About />}>
                        <Route path="chickens" element={<AboutChickens />} />
                        <Route path="pigs" element={<AboutPigs />} />
                    </Route>
                    <Route path="things" element={<Things />}>
                        <Route path="" element={<TestThing {...props} />} />
                        <Route path=":id" element={<SpecificThing />} />
                    </Route>
                    <Route path="test-navigate" element={<TestNavigate {...props} />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
