import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const comentario = this.props.dishes.map((dish, index) => {
            if (this.props.selectedDish != null) {
                return (
                        <CardBody>
                            <CardText>{dish.comments[index].comment}</CardText>
                            <CardText>-- {dish.comments[index].author} , {dish.comments[index].date}</CardText>
                        </CardBody>
                )
            }else {
            return(
                        <div></div >
                    );
    }
})
return (
    <div className="">
            <div className="text-center">
                <h4>Comments</h4>
                {comentario}
            </div>
    </div>
)
    }

}

export default DishDetail;
