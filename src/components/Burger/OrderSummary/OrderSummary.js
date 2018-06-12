import React from 'react';

import Auxiliary from './../../../hoc/Auxiliary';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
        return (
        <li key={key+'-key'}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>: 
            {props.ingredients[key]}
        </li>);
        });
   console.log(ingredientSummary);
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your burger consists of the following: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button>
        </Auxiliary>
    )
};

export default orderSummary;