import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const productData = {
    title: "Iphone x13",
    description: "new phone extra expensive ....",
    price: 3000,
    image:
      "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/apple-iphone-13-pro-frandroid-2021.png?resize=580,580",
  };

  return (
    <Card style={{ width: "15rem", margin: "1rem" }}>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <Button variant="primary">{`${productData.price} Dt`}</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
