package com.user.accountManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user_data")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String fullName;

    @Column
    private String state;

    @Column
    private String bankName;

    @Column
    private String ifscCode;

    @Column
    private String accountType;

    @Column
    private String accountNumber;

    @Column
    private String amount;

}