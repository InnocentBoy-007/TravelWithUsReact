import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <h1 className="text-center py-2">Contact List</h1>
            <Container className='py-4'>
                <Row>
                    <Col xs={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/17937642/pexels-photo-17937642/free-photo-of-girl-standing-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                            <Card.Body>
                                <Card.Title>Personal - 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the Personal - 1 and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col xs={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/20304374/pexels-photo-20304374/free-photo-of-woman-in-pink-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <Card.Body>
                                <Card.Title>Personal - 2</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the Personal - 1 and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Contact</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17474394/pexels-photo-17474394/free-photo-of-smiling-woman-in-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Personal - 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row className='py-4'>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17365935/pexels-photo-17365935/free-photo-of-woman-in-skirt-and-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Personal - 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17074693/pexels-photo-17074693/free-photo-of-woman-in-pink-shirt-standing-with-arm-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Personal - 5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/20138750/pexels-photo-20138750/free-photo-of-smiling-woman-in-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Personal - 6</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row className='py-4'>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/19304034/pexels-photo-19304034/free-photo-of-woman-among-lavender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Personal - 7</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/24889711/pexels-photo-24889711/free-photo-of-woman-in-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Personal - 8</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={4}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/22042255/pexels-photo-22042255/free-photo-of-woman-in-shirt-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Personal - 9</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Personal - 1 and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
        </div>
    )
}

