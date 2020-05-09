import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WeatherCard = (props) => {
    console.log(" props in weather  ", props);
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.data.recipe.label}</CardTitle>
          <CardSubtitle>{props.data.recipe.dietLabels}</CardSubtitle>
          <CardText>{props.data.recipe.ingredientLines}</CardText>
          <Button>Discover</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;