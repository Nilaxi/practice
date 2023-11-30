import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
export const EDisplay = ({title,img,des}) => {
  return (
    <Col xs lg="3">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {des}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
  </Col>
  )
}