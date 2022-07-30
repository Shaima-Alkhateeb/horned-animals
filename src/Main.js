import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from "react-bootstrap";


class Main extends React.Component {
  
  filterDta = (e) => {
    this.props.filterBeastByNumber(e)
}


  render() {
    return (
      <>
      <Row xs={1} md={4}  className="g-4"> {

        this.props.allBeast.map((item, idx) => 
          <Col key={idx} >
            <Form filterBeastByNumber={this.filterBeastByNumber}/>
            <HornedBeast title={item.title} image_url={item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} filterBeastByNumber={this.filterBeastByNumber}/>
          </Col>
        )
      }
      </Row> 
      </>
    );
  }
}

export default Main;