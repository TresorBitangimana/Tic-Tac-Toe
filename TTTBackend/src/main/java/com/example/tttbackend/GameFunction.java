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

    public String getWinner(){
        return winner;
    }

    public void checkWinner(String[][] board){
        winner = winningCondition(board);
    }

    public String winningCondition(String[][] board){
        // if X wins
        if(board[0][0] != null && board[0][0].equals("X") &&
                board[0][1] != null && board[0][1].equals("X") &&
                board[0][2] != null && board[0][2].equals("X")){
            return "X";
        }
        else if(board[1][0] != null && board[1][0].equals("X") &&
                board[1][1] != null && board[1][1].equals("X") &&
                board[1][2] != null && board[1][2].equals("X")){
            return "X";
        }
        else if(board[2][0] != null && board[2][0].equals("X") &&
                board[2][1] != null && board[2][1].equals("X") &&
                board[2][2] != null && board[2][2].equals("X")){
            return "X";
        }
        else if(board[0][0] != null && board[0][0].equals("X") &&
                board[1][1] != null && board[1][1].equals("X") &&
                board[2][2] != null && board[2][2].equals("X")){
            return "X";
        }
        else if(board[2][0] != null && board[2][0].equals("X") &&
                board[1][1] != null && board[1][1].equals("X") &&
                board[0][2] != null && board[0][2].equals("X")){
            return "X";
        }
        else if(board[0][1] != null && board[0][1].equals("X") &&
                board[1][1] != null && board[1][1].equals("X") &&
                board[2][1] != null && board[2][1].equals("X")){
            return "X";
        }
        else if(board[0][0] != null && board[0][0].equals("X") &&
                board[1][0] != null && board[1][0].equals("X") &&
                board[2][0] != null && board[2][0].equals("X")){
            return "X";
        }
        else if(board[0][2] != null && board[0][2].equals("X") &&
                board[1][2] != null && board[1][2].equals("X") &&
                board[2][2] != null && board[2][2].equals("X")){
            return "X";
        }

        // if O wins
        if(board[0][0] != null && board[0][0].equals("O") &&
                board[0][1] != null && board[0][1].equals("O") &&
                board[0][2] != null && board[0][2].equals("O")){
            return "O";
        }
        else if(board[1][0] != null && board[1][0].equals("O") &&
                board[1][1] != null && board[1][1].equals("O") &&
                board[1][2] != null && board[1][2].equals("O")){
            return "O";
        }
        else if(board[2][0] != null && board[2][0].equals("O") &&
                board[2][1] != null && board[2][1].equals("O") &&
                board[2][2] != null && board[2][2].equals("O")){
            return "O";
        }
        else if(board[0][0] != null && board[0][0].equals("O") &&
                board[1][1] != null && board[1][1].equals("O") &&
                board[2][2] != null && board[2][2].equals("O")){
            return "O";
        }
        else if(board[2][0] != null && board[2][0].equals("O") &&
                board[1][1] != null && board[1][1].equals("O") &&
                board[0][2] != null && board[0][2].equals("O")){
            return "O";
        }
        else if(board[0][1] != null && board[0][1].equals("O") &&
                board[1][1] != null && board[1][1].equals("O") &&
                board[2][1] != null && board[2][1].equals("O")){
            return "O";
        }
        else if(board[0][0] != null && board[0][0].equals("O") &&
                board[1][0] != null && board[1][0].equals("O") &&
                board[2][0] != null && board[2][0].equals("O")){
            return "O";
        }
        else if(board[0][2] != null && board[0][2].equals("O") &&
                board[1][2] != null && board[1][2].equals("O") &&
                board[2][2] != null && board[2][2].equals("O")){
            return "O";
        }

        return null;
    }
}
