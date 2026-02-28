package com.example.tttbackend;

public class Account {

    private String username;
    private String password;
    private String method;

    public Account(String username, String password, String method){
        this.username = username;
        this.password = password;
        this.method = method;
    }

    /**
     * no arg-constructor
     */
    public Account(){
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getMethod() {
        return method;
    }



}
