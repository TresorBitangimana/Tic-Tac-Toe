import "./Game.css";

import { useState, useEffect } from "react";

function Home() {
    const [turnCount, setTurnCount] = useState(1);

    useEffect(() => {
        if (turnCount == 10) {
            gameOver();
            setTurnCount(0); //resets the counter
        } else {
            const cells = document.querySelectorAll(".cells");

            const handleClick = (e) => {
                if (e.target.textContent == "") {
                    if (turnCount % 2 == 0) {
                        e.target.textContent = "O";
                    } else {
                        e.target.textContent = "X";
                    }
                    setTurnCount(turnCount + 1);
                }
            };

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

    return (
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
                <div className="game-over-container" id="game-over-container">
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
    );
}

export default Home;
