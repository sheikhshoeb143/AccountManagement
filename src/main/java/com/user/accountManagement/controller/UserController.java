package com.user.accountManagement.controller;

import com.user.accountManagement.error.BadRequestException;
import com.user.accountManagement.error.RecordNotFoundException;
import com.user.accountManagement.model.User;
import com.user.accountManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;


@RestController

public class UserController {


    @Autowired
    UserService service;

    @GetMapping("/")
    public ModelAndView showUserForm() {
        ModelAndView modelAndView = new ModelAndView("userForm");
        return modelAndView;
    }

    @GetMapping("/user-table")
    public ModelAndView userTable() {
        ModelAndView modelAndView = new ModelAndView("userTable");
        //return "userTable"; // This should match the name of your HTML file without the extension
        return modelAndView;
    }

    // Get all users
    // http://localhost:8080/user
    @GetMapping("/user")
    public List<User> getAllUsers() {
        return service.findAll();

    }

    // Add Users
    // http://localhost:8080/add-user
    @PostMapping("/add-user")
    public ResponseEntity<User> addUser(@RequestBody @Valid User user) {
        if (user == null || isAnyFieldMissing(user)) {
            throw new BadRequestException("All required fields must be present in the request body");
        }

        System.out.println("User Added");
        User newUser = service.save(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    private boolean isAnyFieldMissing(User user) {
        return user.getFullName() == null || user.getFullName().isEmpty() ||
                user.getState() == null ||  user.getState().isEmpty() ||
                user.getBankName() == null ||  user.getBankName().isEmpty() ||
                user.getIfscCode() == null ||  user.getIfscCode().isEmpty() ||
                user.getAccountType() == null ||  user.getAccountType().isEmpty() ||
                user.getAccountNumber() == null ||  user.getAccountNumber().isEmpty() ||
                user.getAmount() == null || user.getAmount().isEmpty();
    }

    // Exception handling for bad request
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<String> handleBadRequestException(BadRequestException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    // GET Single User
    // http://localhost:8080/user/1
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {
        Optional<User> user = service.findById(id);

        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseThrow(() -> new RecordNotFoundException("User " + id + " not found."));
    }


    // Update User

    @PutMapping(path = "/update-user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody @Valid User user, @PathVariable("id") Integer id) {
        Optional<User> existingUser = service.findById(id);

        if (existingUser.isEmpty()) {
            throw new RecordNotFoundException("User " + id + " not found.");
        }

        User updateUser = existingUser.get();

        // Check if any detail is missing in the updated user
        if (isAnyFieldMissing(user)) {
            throw new BadRequestException("All required fields must be present in the request body");
        }

        // Update user details
        updateUser.setFullName(user.getFullName());
        updateUser.setState(user.getState());
        updateUser.setBankName(user.getBankName());
        updateUser.setIfscCode(user.getIfscCode());
        updateUser.setAccountType(user.getAccountType());
        updateUser.setAccountNumber(user.getAccountNumber());
        updateUser.setAmount(user.getAmount());

        return new ResponseEntity<>(service.save(updateUser), HttpStatus.OK);
    }

    // Patch - partial update specific column
    @PatchMapping(path = "/patch-user/{id}")
    public ResponseEntity<User> updateUserAmountorName(@RequestBody @Valid User user, @PathVariable("id") Integer id) {

        Optional<User> currentUser = service.findById(id);
        User updateUserData = new User();
        if (currentUser.isEmpty()) {
            throw new RecordNotFoundException("User " + id + " not found.");
        } else {
            updateUserData = currentUser.get();
            if (user.getFullName() != null && user.getFullName().isEmpty()) {
                updateUserData.setFullName(user.getFullName());
            }
            if (user.getState() != null && user.getState().isEmpty()) {
                updateUserData.setState(user.getState());
            }
            if (user.getBankName() != null && user.getBankName().isEmpty()) {
                updateUserData.setBankName(user.getBankName());
            }
            if (user.getIfscCode() != null && user.getIfscCode().isEmpty()) {
                updateUserData.setIfscCode(user.getIfscCode());
            }
            if (user.getAccountType() != null && user.getAccountType().isEmpty()) {
                updateUserData.setAccountType(user.getAccountType());
            }
            if (user.getAccountNumber() != null && user.getAccountNumber().isEmpty()) {
                updateUserData.setAccountNumber(user.getAccountNumber());
            }
            if (user.getAmount() != null && user.getAmount().isEmpty()) {
                updateUserData.setAmount(user.getAmount());
            }
            return new ResponseEntity<>(service.save(updateUserData), HttpStatus.OK);
        }
    }

    // Delete Single User
    // http://localhost:8080/delete-user/1
    @DeleteMapping(path = "/delete-user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id) {
        boolean isUserExists = service.checkUserExists(id);

        if (!isUserExists) {
            throw new RecordNotFoundException("User " + id + " not found.");
        }

        service.deleteUserById(id);

        return new ResponseEntity<>("User " + id + " deleted successfully", HttpStatus.OK);
    }



    // Delete All Users
    // http://localhost:8080/delete-all-users
    @DeleteMapping("/delete-all-users")
    public String deleteAll() {
        return service.deleteAll();
    }
}