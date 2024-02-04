package com.user.accountManagement.error;

public class BadRequestException extends RuntimeException{
    public BadRequestException(String message) {
        super(message);
    }

}
