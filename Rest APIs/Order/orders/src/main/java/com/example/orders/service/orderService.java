package com.example.orders.service;

import com.example.orders.data.order;
import com.example.orders.data.orderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class orderService {

    //Using Autowired to Automatically inject the necessary obj
    @Autowired
    private orderRepository ordRepo;


    public List<order> getAllOrder(){
        List<order> orders = ordRepo.findAll();
        return orders;
    }

    public order getOrderById(int id){
        Optional<order> ordr = ordRepo.findById(id);
        return ordr.get();
    }

    public order updateOrders(order ordr_up){
        return ordRepo.save(ordr_up);
    }

    public order createOrder(order cus){
        return ordRepo.save(cus);
    }

    public void deleteOrder(int ordr){
        if(getOrderById(ordr)!=null){
            ordRepo.deleteById(ordr);
        }
    }

}