import "./App.css";

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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
