package com.example.tttbackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5175")
public class Game {

    @PostMapping("/")
    public ResponseEntity<?> gameData(@RequestBody FrontData item){
        item.getCurrentPlay();
//        return ResponseEntity.ok(item);
        return ResponseEntity.ok("Hello from  server");
    }

    @PostMapping("/login")
    public ResponseEntity<?> Login(){
        return ResponseEntity.ok("");
    }


}
