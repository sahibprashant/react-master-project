import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    Image,
    Form,
    Button,
} from 'react-bootstrap'
import cover_img from '../assets/cover.jpg'
import bslogo from '../assets/bslogo.png'
import logincode from '../assets/logincode.png'

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        //just move to next page pass the values
        console.log(email, password)
        navigate('/tab1')
    }

    return (
        <Container fluid className="p-0">
            <Row className="vh-100 m-0">
                <Col className="d-none d-md-flex align-items-center" md={8} >
                    <CardImg src={cover_img} className="shadow rounded-4 m-4" />
                </Col>
                <Col className="d-flex flex-column align-items-center p-5 h-100 overflow-auto" >
                    <Image fluid roundedCircle={true} src={bslogo} className="shadow w-100 h-100 mb-3" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <p className='fs-5 fw-bold mb-5'>Learning BootStrap</p>

                    <Form className="w-100" onSubmit={() => {handleSubmit()}}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label >Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email Address"
                                onChange={(val) => { setEmail(val.target.value) }}
                                required></Form.Control>
                            <Form.Text className="text-muted">
                                We will never share your credentilas with anyone!!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password"
                                onInput={(val) => { setPassword(val.target.value) }}
                                required></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formCheckBox">
                            <Form.Check type="checkbox" label="Remember Me" required />
                        </Form.Group>

                        <Button className="w-100 mb-3" type="submit" >Submit</Button>
                        <p className="text-decoration-underline text-center" style={{ fontSize: '14px' }}>Forgot Password</p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;


