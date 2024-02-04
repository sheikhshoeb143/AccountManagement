package com.user.accountManagement.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.user.accountManagement.controller.UserController;
import com.user.accountManagement.error.RecordNotFoundException;
import com.user.accountManagement.model.User;
import com.user.accountManagement.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;


@ExtendWith(MockitoExtension.class)
public class ControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void getAllUsers() throws Exception {
        // Arrange
        List<User> userList = Arrays.asList(
                new User(1, "John Doe", "California", "Bank A", "ABC123", "Savings", "1234567890", "1000"),
                new User(2, "Jane Doe", "New York", "Bank B", "XYZ789", "Checking", "0987654321", "2000")
        );

        when(userService.findAll()).thenReturn(userList);

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(get("/user")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.length()").value(userList.size()))
                .andExpect(jsonPath("$[0].fullName").value("John Doe"))
                .andExpect(jsonPath("$[1].fullName").value("Jane Doe"));
    }




//    @Test
//    void getUserById() throws Exception {
//        // Arrange
//        User user = new User(1, "Ashu", "CG", "SBI", "SBIN0007065", "Savings", "1234567890", "1000");
//        when(userService.findById(1)).thenReturn(Optional.of(user));
//
//        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
//
//        // Act & Assert
//        mockMvc.perform(get("/user/1")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//                .andExpect(jsonPath("$.fullName").value("Ashu"))
//                .andExpect(jsonPath("$.state").value("CG"))
//                .andExpect(jsonPath("$.bankName").value("SBI"))
//                .andExpect(jsonPath("$.ifscCode").value("SBIN0007065"))
//                .andExpect(jsonPath("$.accountType").value("Savings"))
//                .andExpect(jsonPath("$.accountNumber").value("1234567890"))
//                .andExpect(jsonPath("$.amount").value("1000"));
//    }

    @Test
    void getUserById_NotFound() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
        // Act & Assert
        mockMvc.perform(get("/user/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$").doesNotExist());
    }


    @Test
    void getUserById_WithException() {
        // Arrange
        when(userService.findById(anyInt())).thenThrow(new RecordNotFoundException("User not found"));

        // Act & Assert
        try {
            userController.getUser(1);
        } catch (RecordNotFoundException ex) {
            assert ex.getMessage().equals("User not found");
        }
    }


    @Test
    void addUser_Success() throws Exception {
        // Arrange
        User userToAdd = new User(1,"John Doe", "California", "Bank A", "ABC123", "Savings", "1234567890", "1000");
        User addedUser = new User(1, "John Doe", "California", "Bank A", "ABC123", "Savings", "1234567890", "1000");

        when(userService.save(any(User.class))).thenReturn(addedUser);

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(post("/add-user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userToAdd)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.fullName").value("John Doe"))
                .andExpect(jsonPath("$.state").value("California"))
                .andExpect(jsonPath("$.bankName").value("Bank A"));
    }

    @Test
    void addUser_InvalidData() throws Exception {
        // Arrange
        User invalidUser = new User(); // Missing required fields

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(post("/add-user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidUser)))
                .andExpect(status().isBadRequest());
    }


    @Test
    void updateUser_Success() throws Exception {
        // Arrange
        int userId = 1;
        User existingUser = new User(userId, "John Doe", "California", "Bank A", "ABC123", "Savings", "1234567890", "1000");
        User updatedUser = new User(userId, "Updated Name", "New York", "Bank B", "XYZ789", "Checking", "9876543210", "2000");

        when(userService.findById(userId)).thenReturn(Optional.of(existingUser));
        when(userService.save(any(User.class))).thenReturn(updatedUser);

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(put("/update-user/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"fullName\":\"Updated Name\",\"state\":\"New York\",\"bankName\":\"Bank B\",\"ifscCode\":\"XYZ789\",\"accountType\":\"Checking\",\"accountNumber\":\"9876543210\",\"amount\":\"2000\"}"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(userId))
                .andExpect(jsonPath("$.fullName").value("Updated Name"))
                .andExpect(jsonPath("$.state").value("New York"))
                .andExpect(jsonPath("$.bankName").value("Bank B"));
    }

    @Test
    void deleteUserById_UserExists() throws Exception {
        // Arrange
        int userId = 1;

        when(userService.checkUserExists(userId)).thenReturn(true);

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/delete-user/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("User " + userId + " deleted successfully"));
    }

    @Test
    void deleteAllUsers_Success() throws Exception {
        // Arrange
        when(userService.deleteAll()).thenReturn("All records deleted");

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/delete-all-users")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("All records deleted"));
    }

    @Test
    void deleteAllUsers_EmptyRecords_Success() throws Exception {
        // Arrange
        when(userService.deleteAll()).thenReturn("All records deleted");

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/delete-all-users")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("All records deleted"));
    }




}
