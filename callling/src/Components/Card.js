import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cart = ({myData}) => {
    console.log("data in props" , myData);
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle>{myData.recipe.label}</CardTitle>
          <CardSubtitle>Ingredients</CardSubtitle>
            <CardText>{myData.recipe.ingredientLines}</CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cart;