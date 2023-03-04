import React from 'react';
import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';

const ContactComponent = () => {
    return (
        <div id="notify">
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Remind Me!</h1>
                            <h6 className="subtitle">Subscribe to receive real time air quality data in your area!</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div href="/#notify" className="contact1">
                <Row>
                    <Container>
                        <div className="spacer">
                            <Row className="m-0">
                                <Col lg="8">
                                    <div className="contact-box p-r-40">
                                        <h4 className="title">Notify Me!</h4>
                                        <Form>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="text" placeholder="name" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="text" placeholder="email" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="text" placeholder="City" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <Button type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow"><span> SUBMIT <i className="ti-arrow-right"></i></span></Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div className="detail-box p-40 bg-info">
                                        <h2 className="text-white">BreatheEasy</h2>
                                        <p className="text-white m-t-30 op-8">647-333-2027
                                            <br /> wangadam019@gmail.com</p>
                                        <p className="text-white op-8">1000 Carlton Rd
                                            <br />Unionville, ON L3P 7P5</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </div>
        </div>
    );
}

export default ContactComponent;
