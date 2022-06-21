import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
/* Components */
import DishDetail from './DishDetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    
        renderDish(dish) {
            if (dish != null) {
                return (
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                )
            } else {
                return (
                    <div>
                    </div>
                )
            }
        } 
    render() {
        const menu = this.props.dishes.map((dish) => { /* This is a prop that are provided from App.js 
            in the render() <MenuComponent dishes={}> */
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });



        console.log('Menu component render is invoked')

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                     <div className="col-sm-6">
                        <Card>
                            {this.renderDish(this.state.selectedDish)}
                        </Card>
                    </div>
                    <div className="col-sm-6">
                    <DishDetail selectedDish={this.state.selectedDish} dishes={this.props.dishes} superDish={this.renderDish(this.state.selectedDish)} />  
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
