import "./App.css";

import LogIn from "./LogIn/LogIn.jsx";
import Game from "./Game/Game.jsx";
import Home from "./Home/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="container" id="container">
            <Router>
                <Routes>
                    <Route path="/" element={<LogIn />}>
                        LogIn
                    </Route>
                    <Route path="/home" element={<Home />}>
                        Home
                    </Route>
                    <Route path="/game" element={<Game />}>
                        Game
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
