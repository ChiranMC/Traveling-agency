import { render } from '@testing-library/react'
import React, {Component} from 'react'
import CustomerService from '../../services/CustomerService'
import OrderService from '../../services/OrderService'
import './payments.css'

class Payments3 extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            secondName:'',
            customerEmail: '',
            cardNumber: '',
            phoneNumber: '',
            packageType: 'package3',
            country: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changecustomerEmailHandler = this.changecustomerEmailHandler.bind(this);
        this.changecardNumberHandler = this.changecardNumberHandler.bind(this);
        this.changecountryHandler = this.changecountryHandler.bind(this);
        this.saveInfo = this.saveInfo.bind(this);

    }

    saveInfo = (e) =>{
        e.preventDefault();

        let customer ={firstName: this.state.firstName,secondName: this.state.secondName,phoneNumber: this.state.phoneNumber};
        console.log('customer =>' + JSON.stringify(customer));

        //Sending Customer Data to the API
        CustomerService.createCustomer(customer).then(res => {
            this.props.history.push('/customers');
        });

        let order ={customerEmail: this.state.customerEmail,packageType: this.state.packageType,cardNumber: this.state.cardNumber, 
        country: this.state.country};
        console.log('order =>' +JSON.stringify(order));

        //Sending Order Data to the API
        OrderService.createOrder(order).then(resp => {
            this.props.history.push('/orders');
        });
    }

    changeFirstNameHandler= (event) =>{
        this.setState({firstName: event.target.value})
    }

    changeSecondNameHandler= (event) =>{
        this.setState({secondName: event.target.value})
    }

    changecustomerEmailHandler= (event) =>{
        this.setState({customerEmail: event.target.value})
    }

    changephoneNumberHandler= (event) =>{
        this.setState({phoneNumber: event.target.value})
    }

    changecardNumberHandler= (event) =>{
        this.setState({cardNumber: event.target.value})
    }

    changecountryHandler= (event) =>{
        this.setState({country: event.target.value})
    }

    render(){

        return(
            <div className="9DayPackagePersonForm">
                <h1 className='text-center'>9 Day Trip Across Sri Lanka</h1>
                <div className="Ragister-Form">
                    <form className="container">
                        <div className="cards">
    
                            <div className="card-header text-center">
                                <h2>Register Here!</h2>
                            </div>
                            <div className="card-body">
                                <div className="name">
                                    <label>First Name :</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
    
                                    <label className="spacemaker">Second Name :</label>
                                    <input placeholder="Second Name" name="secondName" className="form-control"
                                           value={this.state.secondName} onChange={this.changeSecondNameHandler}></input>
                                </div>
                                <br/>
                                <div className="email&phone_number">
                                    <label>Email :</label>
                                    <input placeholder="customerEmail" name="customerEmail" className="form-control"
                                           value={this.state.customerEmail} onChange={this.changecustomerEmailHandler}></input>
    
                                    <label className="spacemaker1">Phone Number :</label>
                                    <input placeholder="phoneNumber" name="phoneNumber" className="form-control"
                                           value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}></input>
                                </div>
                                <br/>
                                <div className="cardDetails">
                                    <label>Card Number :</label>
                                    <input placeholder="cardNumber" name="cardNumber" className="form-control"
                                           value={this.state.cardNumber} onChange={this.changecardNumberHandler}></input>
    
                                    <label className="spacemaker2">Cvv :</label>
                                    <input placeholder="cardNumber" name="cardNumber" className="form-control"></input>
                                </div>
                                <br/>
                                <div className="count&address">
                                    <label>Country :</label>
                                    <input placeholder="country" name="country" className="form-control"
                                           value={this.state.country} onChange={this.changecountryHandler}></input>
                                </div>
    
                            </div>
                            <br/>
                            <div className="card-footer text-center">
                                <button className="btn btn-success" onClick={this.saveInfo}>Register</button>
                            </div>
    
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

  export default Payments3