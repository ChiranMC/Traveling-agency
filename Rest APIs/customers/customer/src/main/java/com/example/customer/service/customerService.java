package com.example.customer.service;

import com.example.customer.data.customer;
import com.example.customer.data.customerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class customerService {

    //Using Autowired to Automatically inject the necessary obj
    @Autowired
    private customerRepository cusRepo;


    public List<customer> getAllCustomer(){
        List<customer> customers = cusRepo.findAll();
        return customers;
    }

    public customer getCustomerById(int id){
        Optional<customer> custm = cusRepo.findById(id);
        return custm.get();
    }
    public customer createCustomer(customer cus){
        return cusRepo.save(cus);
    }

    public customer updateCustomer(customer cust_up){
        if(getCustomerById(cust_up.getId())!=null) {
            return cusRepo.save(cust_up);
        }
        else {
            return cusRepo.save(cust_up);
        }
    }

    public void deleteCustomer(int custm){
        if(getCustomerById(custm)!=null){
            cusRepo.deleteById(custm);
        }
    }

}
