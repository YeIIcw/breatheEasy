import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';



const HeaderBanner = () => {

    function displayResults()
    {
        try{
        fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=f6bf196015464b5fb8273e5522911cfc`)
        .then(ap =>{
            return ap.json();
        }).then(displayResults_aq)
        } catch{
            alert('Enter More Precise Location');
        }
    }

    function displayResults_aq(ap)
    {
        console.log(ap.list[0].components.o3)
    }

    displayResults();

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <input type="text" placeholder="Enter a Location..." class="location-search-box" />
                        <div class="location">
                        <div class="city">Location</div>
                        <div class="date">Current Date</div>
                    </div>
                    <div class="coordinates">
                        <div class="lat">Lat.</div>
                        <span id="lat-value">TBD</span>
                        <div class="lon">Long.</div>
                        <span id="lon-value">TBD</span>
                    </div>
                    
                    </Col>
                </Row>
            </Container>
            <div>test</div>
        </div>
    );
}

export default HeaderBanner;
