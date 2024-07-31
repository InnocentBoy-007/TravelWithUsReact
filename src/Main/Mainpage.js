import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image, Badge, Carousel, Card, Stack } from 'react-bootstrap'
import PaginationComponent from '../Components/Pagination';

function ResponsiveAutoExample() {
    return (
        <main>
            <Container fluid className='md'>
                <Row className='my-0 px-2'>
                    <Col sm={6}><Image src="https://picsum.photos/900/400" fluid /></Col>
                    <Col sm={6}>
                        <h3>Welcome to the joy of nature</h3>
                        <p>Text messaging is most often used between private mobile phone users, as a substitute for voice calls in situations where voice communication is impossible or undesirable (e.g., during a school class or a work meeting). Texting is also used to communicate very brief messages, such as informing someone that you will be late or reminding a friend or colleague about a meeting. As with e-mail, informality and brevity have become an accepted part of text messaging. Some text messages such as SMS can also be used for the remote control of home appliances. It is widely used in domotics systems. Some amateurs have also built their own systems to control (some of) their appliances via SMS.[17][18] A Flash SMS is a type[19] of text message that appears directly on the main screen without user interaction and is not automatically stored in the inbox. It can be useful in cases such as an emergency (e.g., fire alarm) or confidentiality (e.g., one-time password).[20] Texting is also used to communicate very brief messages, such as informing someone that you will be late or reminding a friend or colleague about a meeting. As with e-mail, informality and brevity have become an accepted part of text messaging. Some text messages such as SMS can also be used for the remote control of home appliances.</p>
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