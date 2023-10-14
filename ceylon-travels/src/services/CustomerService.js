import axios from 'axios';

const Customer_API_Base_Url = "http://localhost:8087/customers";

class CustomerService{
    getCustomers(){
        return axios.get(Customer_API_Base_Url);
    }

    createCustomer(customer){
        return axios.post(Customer_API_Base_Url, customer);
    }

    getCustomerById(id){
        return axios.get(Customer_API_Base_Url+ '/' +id);
    }

    updateCustomer(customer){
        return axios.put(Customer_API_Base_Url, customer);
    }

    deleteCustomer(customerid){
        return axios.delete(Customer_API_Base_Url + '/' + customerid);
    }
}

export default new CustomerService()