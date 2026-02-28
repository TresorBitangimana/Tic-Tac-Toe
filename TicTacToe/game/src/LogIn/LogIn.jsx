import "./LogIn.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogIn(e) {
        if (username.length > 0 && password.length > 0) {
            const user = { username, password, method: "Log-in" };
            console.log(user, "logged in");

            handleLogInRequest(user);

            navigate("/");
        } else {
            e.preventDefault(); //prevents the page from reloading
        }
    }

    function handleCreateAccount(e) {
        if (username.length > 0 && password.length > 0) {
            setMethod("createAccount");
            const user = { username, password, method: "Create-account" };
            console.log(user, "created an account");

            handleLogInRequest(user);

            navigate("/");
        } else {
            e.preventDefault(); //prevents the page from reloading
        }
    }

    async function handleLogInRequest(user) {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(user),
        });
    }

    //shows the continue game log in option when the continue button is clicked
    function showLogInOption() {
        const continueGameContainer = document.getElementById(
            "continue-game-container",
        );
        const newGameContainer = document.getElementById("new-game-container");
        continueGameContainer.style.display = "flex";
        newGameContainer.style.display = "none";
    }

    //shows the log in option when the log in button is clicked
    function showCreateAccountOption() {
        const continueGameContainer = document.getElementById(
            "continue-game-container",
        );
        const newGameContainer = document.getElementById("new-game-container");
        continueGameContainer.style.display = "none";
        newGameContainer.style.display = "flex";
    }

    return (
        <div className="log-in-container" id="log-in-container">
            <h1 className="title" id="title">
                Tic Tac Toe
            </h1>
            <div className="home-controls" id="home-controls">
                <div className="options-container" id="options-container">
                    <div
                        className="continue-game-container"
                        id="continue-game-container"
                    >
                        <h2 className="log-in-text" id="log-in-text">
                            Log in
                        </h2>
                        <form className="form" id="form" onSubmit={handleLogIn}>
                            <input
                                type="text"
                                className="user-name-input"
                                id="user-name-input"
                                placeholder="username"
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                className="password-input"
                                id="password-input"
                                placeholder="password"
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button
                                type="submit"
                                className="log-in-button"
                                id="log-in-button"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                    <div className="new-game-container" id="new-game-container">
                        <h2
                            className="create-account-text"
                            id="create-account-text"
                        >
                            Create account
                        </h2>
                        <form
                            className="form"
                            id="form"
                            onSubmit={handleCreateAccount}
                        >
                            <input
                                type="text"
                                className="user-name-input"
                                id="user-name-input"
                                placeholder="username"
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                className="password-input"
                                id="password-input"
                                placeholder="password"
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button
                                type="submit"
                                className="log-in-button"
                                id="log-in-button"
                            >
                                Create account
                            </button>
                        </form>
                    </div>
                    <button
                        onClick={showLogInOption}
                        className="option-buttons"
                        id="continue-container"
                    >
                        Log In
                    </button>
                    <button
                        onClick={showCreateAccountOption}
                        className="option-buttons"
                        id="new-game-button"
                    >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
