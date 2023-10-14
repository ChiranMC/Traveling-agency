import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customers.css'
import CustomerService from '../../services/CustomerService';


class ListCustomerComponents extends Component {
    constructor(props){
        super(props)

        this.state = {
            customersAr: [],
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
      
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then( res => {
            this.setState({customersAr: this.state.customersAr.filter(customersAr => customersAr.id !== id)});
        });
    }


    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({customersAr: res.data});
        });
    }
    render() {
        return (
            <div className="admindashboard">
            <nav className="navBarss">
            <ul className="navlinkss">
                <li>
                    <a href="/ListCustomerComponents" className="LinksCustomizations">Customers</a>
                </li>
                <li>
                    <a href="/Orders" className="LinksCustomizations">Orders</a>
                </li>
            </ul>
            </nav>

            <h1 className="text-center">Customers</h1>
            <div className="rowdw">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Customer ID </th>
                            <th> First Name </th>
                            <th> Second Name </th>
                            <th> Phone Number</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customersAr.map(
                                customers =>
                                <tr key = {customers.id}>
                                    <td>{customers.id}</td>
                                    <td>{customers.firstName}</td>
                                    <td>{customers.secondName}</td>
                                    <td>{customers.phoneNumber}</td>
                                    <td>
                                    <a href={'/updateCustomer/'+customers.id} className="btn btn-success" style={{marginRight:"10px"}}>Edit</a>
                                    <button className="btn btn-danger" onClick={ () => this.deleteCustomer(customers.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default ListCustomerComponents;