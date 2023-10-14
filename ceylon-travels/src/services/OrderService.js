import axios from 'axios';

const Order_API_Base_Url = "http://localhost:8086/orders";

class OrderService{
    getOrders(){
        return axios.get(Order_API_Base_Url);
    }

    createOrder(order){
        return axios.post(Order_API_Base_Url, order);
    }

    deleteOrder(orderid){
        return axios.delete(Order_API_Base_Url + '/' + orderid);
    }
}

export default new OrderService()