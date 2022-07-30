import React from "react";
import Form from 'react-bootstrap/Form';

class FormComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         numberOfHorns: 0
    //     }
    // }

    // handleSubmit = (e) => {
    //     e.preventDefult();
    //     this.setState({
    //         numberOfHorns: e.target.disabledSelect.value
    //     });
    //     console.log({
    //         numberOfHorns: e.target.disabledSelect.value
    //     })
    // }

    
    // for the form
    filterDta = (e) => {
        this.props.filterBeastByNumber(e)
    }

    render () {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Search about number of horns</Form.Label>
              <Form.Select id="disabledSelect" onChange={this.filterDta}>
                  <option value="1">1 </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="100">100</option>
              </Form.Select>
            </Form.Group>  
            
          </Form>
          </>
        )
    }
}

export default FormComponent;