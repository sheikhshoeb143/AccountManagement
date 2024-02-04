package com.user.accountManagement.service;

import com.user.accountManagement.model.User;
import com.user.accountManagement.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service
public class UserService {


    @Autowired
    UserRepository repo;



    public List<User> findAll() {
        return repo.findAll();
    }

    public User save(User user) {

        return repo.save(user);
    }


    public Optional<User> findById(Integer id) {
        return repo.findById(id);
    }

    public boolean checkUserExists(Integer id) {
        return repo.existsById(id);
    }

    public User updateUserById(User user, Integer id) {
        User updateUser = new User();
        updateUser.setId(id);
        updateUser.setFullName(user.getFullName());
        updateUser.setState(user.getState());
        updateUser.setBankName(user.getBankName());
        updateUser.setIfscCode(user.getIfscCode());
        updateUser.setAccountType(user.getAccountType());
        updateUser.setAccountNumber(user.getAccountNumber());
        updateUser.setAmount(user.getAmount());
        return repo.save(updateUser);
    }


    public boolean deleteUserById(Integer id) {

        repo.deleteById(id);

        return true;
    }

    public String deleteAll() {
        repo.deleteAll();
        return "All records deleted";
    }

    public boolean isValidBankNo(String bankAccNo){
        String regex = "^\\d{10}$";
        Pattern p = Pattern.compile(regex);
        if (bankAccNo == null){
            return false;
        }
        Matcher m = p.matcher(bankAccNo);
        if (m.matches())
            return true;
        return false;
    }

}