import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.7,
    bacon: 1.1
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super (props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 3,
            bacon: 5,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    // remove

    render() {
        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;