import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function ForceCounter() {
    const [count, setCount] = useState(null)
    const [formValue, setFormValue] = useState(null)


    return (

        <Card>
            <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Label>
                            Provide age to can see how much force is needed to use a saber.
                        </Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="age">
                                <Form.Control placeholder="Age" onChange={e => setFormValue(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Button onClick={() => setCount(formValue * 10)}>Submit</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
            <Card.Footer>
                {count && `${count} F`}
            </Card.Footer>
        </Card>
    )
}



export default ForceCounter;

