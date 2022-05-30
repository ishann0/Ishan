import React from 'react'
import '../Assests/CSS/ContactCSS.css'
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormText } from 'react-bootstrap';
import { FormCheck } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const contact = () => {


  return (
      <div class="container">
<Form>
  <FormGroup className="mb-3" controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>

  <FormGroup className="mb-3" controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl type="password" placeholder="Password" />
  </FormGroup>
  <FormGroup className="mb-3" controlId="formBasicCheckbox">
    <FormCheck type="checkbox" label="Check me out" />
  </FormGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}

export default contact
