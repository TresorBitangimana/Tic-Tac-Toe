package com.example.tttbackend;

public class FrontData {

    private String player;
    private String position;

    public FrontData(String player, String position){
        this.player = player;
        this.position = position;
    }

    /**
     * no arg-constructor
     */
    public FrontData(){
    }

    public String getPlayer(){
        return player;
    }

    public String getPosition(){
        return position;
    }

    public void getCurrentPlay(){
        System.out.println("player: "+player+" \nposition: "+position);
    }

}
