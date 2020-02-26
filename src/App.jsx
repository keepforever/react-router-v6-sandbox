import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// locals
import Layout from './comps/Layout';
import Home from './comps/Home';
import About from './comps/About';
import AboutChickens from './comps/AboutChickens';
import AboutPigs from './comps/AboutPigs';
import Things from './comps/Things';
import SpecificThing from './comps/SpecificThing';

function App() {
    return (
        <div style={{ padding: '40px' }}>
            <div style={{ display: 'block', justifyContent: 'flex-start' }}>
                <Link to="/home">Home</Link> | <Link to="about">About</Link> | <Link to="things">Things</Link>
            </div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="about" element={<About />}>
                        <Route path="chickens" element={<AboutChickens />} />
                        <Route path="pigs" element={<AboutPigs />} />
                    </Route>
                    <Route path="things" element={<Things />}>
                        <Route path=":id" element={<SpecificThing />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
