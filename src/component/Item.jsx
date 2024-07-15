import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = () => {
  return (
    <div className="container d-flex gap-5 text-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="bg-light"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Card.Body className="pt-3 border-top">
          <Card.Title className="mt-3">Card Title</Card.Title>
          <Card.Text className="mb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="bg-light"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Card.Body className="pt-3 border-top border-bot">
          <Card.Title className="mt-3">Card Title</Card.Title>
          <Card.Text className="mb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="bg-light"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Card.Body className="pt-3 border-top border-bot">
          <Card.Title className="mt-3">Card Title</Card.Title>
          <Card.Text className="mb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="bg-light"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Card.Body className="pt-3 border-top border-bot">
          <Card.Title className="mt-3">Card Title</Card.Title>
          <Card.Text className="mb-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
