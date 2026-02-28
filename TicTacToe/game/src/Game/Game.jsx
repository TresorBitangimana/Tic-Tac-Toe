import "./Game.css";

import { useState, useEffect } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";

import { IoPerson } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";

function Home() {
    const [turnCount, setTurnCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (turnCount == 10) {
            gameOver();
            setTurnCount(0); //resets the counter
        } else {
            const cells = document.querySelectorAll(".cells");

            const handleClick = (e) => {
                if (e.target.textContent == "") {
                    let player = "";
                    if (turnCount % 2 == 0) {
                        e.target.textContent = "O";
                        player = "O";
                    } else {
                        e.target.textContent = "X";
                        player = "X";
                    }

                    const currPosition = e.target.id
                        .toString()
                        .charAt(e.target.id.length - 1); //gets the position of the clicked cell

                    const currGameData = {
                        player: player,
                        position: currPosition,
                    };

                    //call the api and updates updates the data.
                    // console.log(currGameData);
                    handleUpdateOnBoard(currGameData);

                    setTurnCount(turnCount + 1);
                }
            };

            // console.log(gameData);

            //adds an onclick event listener each individual cell.
            cells.forEach((cell) => {
                cell.addEventListener("click", handleClick);
            });

            return () => {
                cells.forEach((cell) => {
                    cell.removeEventListener("click", handleClick);
                });
            };
        }
    }, [turnCount]);

    // //when an update is made on the board, the backend api is called to update data.
    async function handleUpdateOnBoard(currGameData) {
        try {
            const response = await fetch("http://localhost:8080/", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(currGameData),
            });
        } catch (error) {
            console.error(error);
        }
    }

    //restart game function
    function restartGame() {
        const gameOverContainer = document.getElementById(
            "game-over-container",
        );
        gameOverContainer.style.display = "none";
        const cells = document.querySelectorAll(".cells");
        cells.forEach((cell) => {
            cell.textContent = "";
        });
        setTurnCount(1);
    }

    //game over function
    function gameOver() {
        const gameOverContainer = document.getElementById(
            "game-over-container",
        );
        const winner = document.getElementById("winner");

        gameOverContainer.style.display = "block";
        winner.textContent = "player Wins";
    }

    function handleLogInSignUp() {
        navigate("/login");
    }

    return (
        <div className="home-container" id="home-container">
            <div
                className="log-in-sign-up-container"
                id="log-in-sign-up-container"
            >
                <button
                    className="log-in-sign-up-button"
                    id="log-in-sign-up-button"
                    onClick={handleLogInSignUp}
                >
                    Log in / Sign up
                </button>
            </div>
            <div className="menu-container" id="menu-container">
                <button className="player-vs-player" id="player-vs-player">
                    <IoPerson /> vs <IoPerson />
                </button>
                <button className="player-vs-bot" id="player-vs-bot">
                    <IoPerson /> vs <FaRobot />
                </button>
            </div>

            <div className="game-container" id="game-container">
                <div className="score-container" id="score-container">
                    <div className="scores" id="score1">
                        <h1 className="s1" id="s1">
                            0
                        </h1>
                    </div>
                    <div className="scores" id="score2">
                        <h1 className="s2" id="s2">
                            0
                        </h1>
                    </div>
                </div>
                <div className="game" id="game">
                    <div className="cells" id="cell1"></div>
                    <div className="cells" id="cell2"></div>
                    <div className="cells" id="cell3"></div>
                    <div className="cells" id="cell4"></div>
                    <div className="cells" id="cell5"></div>
                    <div className="cells" id="cell6"></div>
                    <div className="cells" id="cell7"></div>
                    <div className="cells" id="cell8"></div>
                    <div className="cells" id="cell9"></div>
                    {/* Game Over Container  */}
                    <div
                        className="game-over-container"
                        id="game-over-container"
                    >
                        <p className="game-over-text" id="game-over-text">
                            Game Over!!!
                        </p>
                        <h1 className="winner" id="winner"></h1>
                    </div>
                </div>
                <div className="restart-container" id="restart-container">
                    <button
                        className="restart-button"
                        id="restart-button"
                        onClick={restartGame}
                    >
                        Restart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
