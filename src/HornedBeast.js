import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: 0
    }
  }

  favouriteClick = () => {
    this.setState({favourite: this.state.favourite +1 });
  }

  render() {
    return ( 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} onClick={this.favouriteClick} />
        <Card.Body>
          <Card.Title>{this.props.title} </Card.Title>
          <div>❤ Like it : {this.state.favourite} </div>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
      
    );
  }
}

export default HornedBeast;
