package com.kyaw.websocket.controller;

import com.kyaw.websocket.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/send")
    @SendTo("/topic/chat")
    public ChatMessage sendMessage(ChatMessage message) {
        return message;
    }
}
