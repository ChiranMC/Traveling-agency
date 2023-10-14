package com.example.customer.controller;

import com.example.customer.data.customer;
import com.example.customer.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class customerController {
    @Autowired
    private customerService customServices;

    @GetMapping(path = "/customers")
    public List<customer> getAllCustomer(){
        return customServices.getAllCustomer();
    }

    @GetMapping(path = "/customers/{custm_id}")  //path variable and parameter should be equal!!
    public customer getCustomerById(@PathVariable int custm_id){  //@PathVariable is declared to tell that the method that value need to get by the path !!
        return customServices.getCustomerById(custm_id);
    }

    @PostMapping(path = "/customers")
    public customer createCustomer(@RequestBody customer ne){
        return customServices.createCustomer(ne);
    }

    @PutMapping(path = "/customers")
    public customer updateCustomer(@RequestBody customer nt){
        return customServices.updateCustomer(nt);
    }

    @DeleteMapping(path = "/customers/{custm_id}")
    public void deleteCustomer(@PathVariable int custm_id){
        customServices.deleteCustomer(custm_id);
    }
}
