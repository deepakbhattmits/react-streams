import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
const FormComponent = () => {
  const [data, setData] = useState({
    data: {}
  });
  const [formValid, setFormValid] = useState(true);
  const validation = () => {
    let formValid = false;
    console.log('validation ', data);
    if (data.FirstName !== '') {
      formValid = true;
    }
    if (data.LastName !== '') {
      formValid = true;
    }
    if (data.Phone !== '') {
      formValid = true;
    }
    if (data.Address !== '') {
      formValid = true;
    }
    if (data.City !== '') {
      formValid = true;
    }
    if (data.Zip !== '') {
      formValid = true;
    }
    return formValid;
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, Object.keys(data).length);
    if (Object.keys(data).length > 5) {
      setFormValid(false);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validation()) {
      console.log('done : ', data);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId='FirstName'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='FirstName'
              type='text'
              value={data.FirstName ? data.FirstName : ''}
              onChange={handleChange}
              placeholder='first name'
            />
          </Form.Group>

          <Form.Group as={Col} controlId='LastName'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='LastName'
              type='text'
              value={data.LastName ? data.LastName : ''}
              onChange={handleChange}
              placeholder='last name'
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='Address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            name='Address'
            type='text'
            value={data.Address ? data.Address : ''}
            onChange={handleChange}
            placeholder='Address'
          />
        </Form.Group>

        <Form.Group controlId='Phone'>
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            name='Phone'
            type='text'
            value={data.Phone ? data.Phone : ''}
            onChange={handleChange}
            placeholder='+91-9898989898'
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId='City'>
            <Form.Label>City</Form.Label>
            <Form.Control
              name='City'
              type='text'
              value={data.City ? data.City : ''}
              onChange={handleChange}
              placeholder='eg. BLR'
            />
          </Form.Group>

          {/* <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control as='select'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group as={Col} controlId='Zip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name='Zip'
              type='text'
              value={data.Zip ? data.Zip : ''}
              onChange={handleChange}
              placeholder='eg. 121212'
            />
          </Form.Group>
        </Form.Row>
        <Button variant='primary' type='submit' disabled={formValid}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default FormComponent;
