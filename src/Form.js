import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormComponent extends React.Component {
    render () {
        return (
            <>
            <Form>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Search about number of horns</Form.Label>
              <Form.Select id="disabledSelect">
                  <option value="1">1 </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="100">100</option>
              </Form.Select>
            </Form.Group>  

            <Button variant="primary" type="submit">
              Submit
            </Button>
            
          </Form>
          </>
        )
    }
}

export default FormComponent;