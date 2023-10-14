import React, { Component } from 'react';
import CustomerService from '../../services/CustomerService'

class UpdateCustomerComponents extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            firstName: '',
            secondName:'',
            phoneNumber: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changephoneNumberHandler = this.changephoneNumberHandler.bind(this);
        this.changeidHandler = this.changeidHandler.bind(this);
        this.updateInfo = this.updateInfo.bind(this);

    }
    componentDidMount(){
        CustomerService.getCustomerById()
    }

    updateInfo = (e) =>{
        e.preventDefault();

        let customer ={firstName: this.state.firstName,secondName: this.state.secondName,phoneNumber: this.state.phoneNumber};
        console.log('customer =>' + JSON.stringify(customer));
        
        CustomerService.updateCustomer(customer, this.state.id).then(res => {
            this.props.history.push('/customers');
        });
    }

    changeidHandler= (event) =>{
        this.setState({id: event.target.value})
    }

    changeFirstNameHandler= (event) =>{
        this.setState({firstName: event.target.value})
    }
    changeSecondNameHandler= (event) =>{
        this.setState({secondName: event.target.value})
    }
    changephoneNumberHandler= (event) =>{
        this.setState({phoneNumber: event.target.value})
    }

    render() {
        return (
            <div className="9DayPackagePersonForm">
                <div className="Ragister-Form">
                    <form className="container">
                        <div className="cards">
    
                            <div className="card-header">
                                <h2>Update Customer Details!</h2>
                            </div>
                            <div className="card-body">
                                <div className="name">
                                    <label>id :</label>
                                    <input placeholder="id" name="id" className="form-control"
                                           value={this.state.id} onChange={this.changeidHandler}></input>

                                    <label>First Name :</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
    
                                    <label className="spacemaker">Second Name :</label>
                                    <input placeholder="Second Name" name="secondName" className="form-control"
                                           value={this.state.secondName} onChange={this.changeSecondNameHandler}></input>
                                </div>
                                <br/>
                                <div className="email&phone_number">
                                    <label className="spacemaker1">Phone Number :</label>
                                    <input placeholder="phoneNumber" name="phoneNumber" className="form-control"
                                           value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}></input>
                                </div>
                                <br/>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={this.updateInfo}>Update</button>
                            </div>
    
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateCustomerComponents;