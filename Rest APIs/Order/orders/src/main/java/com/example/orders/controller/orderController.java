package com.example.orders.controller;

import com.example.orders.data.order;
import com.example.orders.service.orderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class orderController {

    @Autowired
    private orderService orderServices;

    //to fetch data from dB
    @GetMapping(path = "/orders")
    public List<order> getAllOrders(){
        return orderServices.getAllOrder();
    }

    @GetMapping(path = "/orders/{ordr_id}")  //path variable and parameter should be equal!!
    public order getOrderById(@PathVariable int ordr_id){  //@PathVariable is declared to tell that the method that value need to get by the path !!
        return orderServices.getOrderById(ordr_id);
    }

    //to create new data in db
    @PostMapping(path = "/orders")
    public order createCustomer(@RequestBody order ne){
        return orderServices.createOrder(ne);
    }

    //for updating
    // in order to update we can also use the Create method 2
    @PutMapping(path = "/orders")
    public order updateOrder(@RequestBody order nt){
        return orderServices.updateOrders(nt);
    }

    //delete
    @DeleteMapping(path = "/orders/{ordr_id}")
    public void deleteOrder(@PathVariable int ordr_id){
        orderServices.deleteOrder(ordr_id);
    }
}
