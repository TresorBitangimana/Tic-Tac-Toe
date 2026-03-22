import "./Game.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoPerson } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";

function Home() {
    const [turnCount, setTurnCount] = useState(1);
    const [playerXScore, setPlayerXSCore] = useState(0);
    const [playerOScore, setPlayerOSCore] = useState(0);
    const navigate = useNavigate();
    let isWinner = false;

    useEffect(() => {
        if (turnCount == 10) {
            gameOver("Draw"); //calls the gameover function and gives draw as the perimiter
            setTurnCount(0); //resets the counter
        } else {
            const cells = document.querySelectorAll(".cells");

            const handleClick = (e) => {
                if (isWinner) {
                    //handles winner
                } else {
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

            const data = await response.json();
            // console.log(data); //prints the game board, plays, and winner in the terminal
            //checks if there is a winner and calls the gameOver function if so.
            if (data.winner != null) {
                let winningPlayer = data.winner;
                gameOver(winningPlayer);
            }
        } catch (error) {
            console.error(error);
        }
    }

    //restart game function
    async function restartGame() {
        const gameOverContainer = document.getElementById(
            "game-over-container",
        );
        gameOverContainer.style.display = "none";
        const cells = document.querySelectorAll(".cells");
        cells.forEach((cell) => {
            cell.textContent = ""; //resets the content of the cells when the restart button is clicked
        });

        try {
            //sends a post fetch to resets the board in the backend
            await fetch("http://localhost:8080/restart", {
                method: "POST",
            });
        } catch (error) {
            console.error(error);
        }

        setTurnCount(1);
    }

    //updates the score board
    function handleScores(winningPlayer) {
        if (winningPlayer == "X") {
            setPlayerXSCore(playerXScore + 1); // adds 1 to player X
        } else {
            setPlayerOSCore(playerOScore + 1); //adds 1 to player O
        }
    }

    //game over function
    function gameOver(winningPlayer) {
        const gameOverContainer = document.getElementById(
            "game-over-container",
        );
        const winner = document.getElementById("winner");

        gameOverContainer.style.display = "block"; //displays the gamover container which blocks the game board
        // and the user is unable to play untill they click the restart button.
        //assgihns the winner to the winning player, and "Draw if the game ends with a draw"
        if (winningPlayer != "Draw") {
            winner.textContent = `${winningPlayer} Wins`;
            handleScores(winningPlayer); //calls the handle scores function to update the score
        } else {
            winner.textContent = "Draw";
        }
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

            <div className="level-container" id="level-container">
                <button className="level-buttons" id="level-one-button">
                    Level 1
                </button>
                <button className="level-buttons" id="level-two-button">
                    Level 2
                </button>
                <button className="level-buttons" id="level-three-button">
                    Level 3
                </button>
            </div>

            <div className="game-container" id="game-container">
                <div className="score-container" id="score-container">
                    <div className="scores" id="score1">
                        <h1 className="s1" id="s1">
                            {playerXScore}
                        </h1>
                    </div>
                    <div className="scores" id="score2">
                        <h1 className="s2" id="s2">
                            {playerOScore}
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
