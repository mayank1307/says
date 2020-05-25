import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function cards(props){
    return(
        <div className="tab-pane mx-5 my-3 active col-3" id="home">
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.text}</Card.Title>
            <Button variant="danger">Check out</Button>
        </Card.Body>
        </Card>
        
        </div>
    );
}
export default cards;