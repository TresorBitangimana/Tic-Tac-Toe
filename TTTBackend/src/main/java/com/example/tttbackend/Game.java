package com.example.tttbackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173")
public class Game {

    //create the GameFunction class that stoles the game plays frm the front data
    GameFunction gameFunction = new GameFunction();


    /**
     * main game function: receives data from frontend
     *                      update board and play
     *                      check for a winning player
     * @param item an objects from the frontend with a String position and String player
     * @return a linkedHashMap called play of each play.
     *         a 2D array called board of the replica of the board
     */
    @PostMapping("/")
    public ResponseEntity<?> gameData(@RequestBody FrontData item){

        //gets the player and position from the FrontData object
        int position = Integer.parseInt(item.getPosition());
        String player = item.getPlayer();

        gameFunction.addPlay(position, player); //adds the play to the linkedHashMap play
        gameFunction.updateBoard(position, player); //updates the board

        return ResponseEntity.ok(gameFunction);
    }

    /**
     * restart function, resets the plays and board lists
     */
    @PostMapping("/restart")
    public void resetGame(){
        gameFunction.resetPlays();
        gameFunction.resetBoard();
    }

    /**
     * Handles login
     * @return if the log-in was successful or unsuccessful
     */
    @PostMapping("/login")
    public ResponseEntity<?> Login(){
        return ResponseEntity.ok("");
    }


}
