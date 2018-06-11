import React from 'react';
import Auxiliary from './../../../hoc/Auxiliary';

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
            <p>Continue to checkout?</p>
        </Auxiliary>
    )
};

export default orderSummary;