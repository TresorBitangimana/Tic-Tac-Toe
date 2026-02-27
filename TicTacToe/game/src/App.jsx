import "./App.css";

import LogIn from "./LogIn/LogIn.jsx";
import Game from "./Game/Game.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="container" id="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Game />}>
                        Game
                    </Route>
                    <Route path="/login" element={<LogIn />}>
                        LogIn
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
