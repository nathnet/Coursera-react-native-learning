import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishID) {
        this.setState({selectedDish: dishID});
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <Menu 
                    dishes={this.state.dishes} 
                    onPress={(dishID) => this.onDishSelect(dishID)}
                    />
                <Dishdetail 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
                    />
            </View>
        );
    }
}