import React from "react";
import Register from "./components/register";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/qrdisplay" element={<QRDisplay />} />
               
            </Routes>
        </Router>
    );
};

export default App;
