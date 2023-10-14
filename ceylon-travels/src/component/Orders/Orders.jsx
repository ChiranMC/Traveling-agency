import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './orders.css'
import OrderService from '../../services/OrderService';

class Orders extends Component {


    constructor(props){
        super(props)

        this.state = {
            ordersAr: []
        }
        this.deleteOrder = this.deleteOrder.bind(this);
    }
    deleteOrder(id){
        OrderService.deleteOrder(id).then( res => {
            this.setState({ordersAr: this.state.ordersAr.filter(ordersAr => ordersAr.id !== id)});
        });
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ordersAr: res.data});
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

            <h1 className="text-center">Orders</h1>
            <div className="rowdw">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Order ID </th>
                            <th> Customer Email </th>
                            <th> Package Type </th>
                            <th> Card Number </th>
                            <th> Country</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ordersAr.map(
                                orders =>
                                <tr key = {orders.id}>
                                    <td>{orders.id}</td>
                                    <td>{orders.customerEmail}</td>
                                    <td>{orders.packageType}</td>
                                    <td>{orders.cardNumber}</td>
                                    <td>{orders.country}</td>
                                    <td><a className="btn btn-success" style={{marginRight:"10px"}}>Edit</a>
                                    <button className="btn btn-danger" onClick={ () => this.deleteOrder(orders.id)}>Remove</button>
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

export default Orders;