/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Address</h5>
                        <p>1000 Carlton Rd, Unionville, ON L3P 7P5</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Phone: 647-333-2027<br /></p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="#" className="link">wangadam019@gmail.com</a></p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="#" className="link"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="link"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="link"><i className="fa fa-google-plus"></i></a>
                            <a href="#" className="link"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" className="link"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}
export default Footer;
