import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image, Badge, Carousel, Card, Stack } from 'react-bootstrap'
import PaginationComponent from '../Components/Pagination';
import { useEffect, useState } from 'react';

function ResponsiveAutoExample() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://66aa0588613eced4eba73a23.mockapi.io/api/users/display1', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }

        }).then(tasks => {
            // print the task or smthing else
            setUsers(tasks)
            // Do something with the list of tasks
        }).catch(error => {
            // handle error
        })
    }, [])
    return (
        <main>
            <Container fluid className='md'>
                <Row className='my-0 px-2'>
                    <Col sm={6}><Image src="https://picsum.photos/900/400" fluid /></Col>
                    <Col sm={6}>
                        {users.map(user => (
                            <div key={user.id}><h3>{user.heading}</h3>
                            <p>{user.subheading}</p>
                            </div>
                        ))}
                        <Stack direction="horizontal" gap={2}>
                            <Badge bg="primary">Enjoyment</Badge>
                            <Badge bg="secondary">Thrill</Badge>
                            <Badge bg="success">Adventure</Badge>
                            <Badge bg="danger">Danger</Badge>
                        </Stack>
                    </Col>
                </Row>
                <Row className='my-4 px-2'>
                    <Col sm={3}>
                        <Card style={{ width: '27rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/600/410" />
                            <Card.Body>
                                <Card.Title>Thrilling</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '27rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/600/410" />
                            <Card.Body>
                                <Card.Title>Basking</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Carousel data-bs-theme="white">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1000/500"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='text-white'>First slide label</h5>
                                    <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1000/500"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='text-white'>Second slide label</h5>
                                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1000/500"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='text-white'>Third slide label</h5>
                                    <p className='text-white'>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <PaginationComponent></PaginationComponent>
        </main>
    );
}

export default ResponsiveAutoExample;