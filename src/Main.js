import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    render() {
      return (
        <Row xs={1} md={4}  className="g-4"> {
          data.map(item => {
            return (
              <Col>
                <HornedBeast title={item.title} image_url={item.image_url} description={item.description} />
              </Col>
              
            )
          })
        }
        </Row> 
      );
    }
}

export default Main;