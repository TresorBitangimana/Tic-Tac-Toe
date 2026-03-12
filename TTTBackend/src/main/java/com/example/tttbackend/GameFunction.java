package com.example.tttbackend;

import java.util.Arrays;
import java.util.LinkedHashMap;

public class GameFunction {

    private LinkedHashMap<Integer, String> plays = new LinkedHashMap<>();
    private String[][] board = new String[3][3];
    private String winner = null;

    public void addPlay(int position, String player){
        plays.put(position, player);
    }

    public LinkedHashMap<Integer, String> getPlays(){
        return plays;
    }

    public void resetPlays(){
        plays.clear();
    }


    public String[][] getBoard() {
        return board;
    }

    public void updateBoard(int position, String player){
        switch (position){
            case 1 -> board[0][0] = player;
            case 2 -> board[0][1] = player;
            case 3 -> board[0][2] = player;
            case 4 -> board[1][0] = player;
            case 5 -> board[1][1] = player;
            case 6 -> board[1][2] = player;
            case 7 -> board[2][0] = player;
            case 8 -> board[2][1] = player;
            case 9 -> board[2][2] = player;

        }
    }

    public void resetBoard(){
        for (String[] strings : board) {
            Arrays.fill(strings, null);
        }
    }

    public String checkWinner(){

        return winner;
    }
}
