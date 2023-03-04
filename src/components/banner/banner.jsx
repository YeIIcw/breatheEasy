import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';



const HeaderBanner = () => {

    const [data, setData] = useState(); 

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
        setData(ap)
    }

    useEffect( () => {
        displayResults();
    }, [])

    console.log(data && data.list[0].main.aqi);

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <input type="text" placeholder="Enter a Location..." class="location-search-box" />
                        <div>
                            {data && (
                                <ul>
                                <li>Lon: {data.coord.lon}</li>
                                <li>Lat: {data.coord.lat}</li>
                                <li>O3: {data.list[0].main.aqi}</li>
                                {/* add more list items to display other properties as needed */}
                                </ul>
                            )}
                        </div>
                        <div class="location">
                        <div class="city">Location</div>
                        <div class="date">Current Date</div>
                    </div>
                    <div class="coordinates">
                        <div class="lat">Lat.</div>
                        <span id="lat-value">a</span>
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
