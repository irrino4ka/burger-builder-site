import React, { Component } from 'react';

import Auxiliary from './../../../hoc/Auxiliary';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('ordersummary will update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
        return (
        <li key={key+'-key'}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>: 
            {this.props.ingredients[key]}
        </li>);
        });
        return (
            <Auxiliary>
            <h3>Your Order</h3>
            <p>Your burger consists of the following: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong>{this.props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button clicked={this.props.purchaseCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={this.props.purchaseContinued} btnType="Success">Continue</Button>
        </Auxiliary>
        )
    }

};

export default OrderSummary;