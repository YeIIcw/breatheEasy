import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { Button} from 'reactstrap';



const HeaderBanner = () => {

    const [data, setData] = useState(); 
    const [city, setCity] = useState();
    const [location, setLocation] = useState("Location");
    const [date, setDate] = useState(getCurrentDate);
    const [lon, setLon] = useState("TBD");
    const [lat, setLat] = useState("TBD");
    const [aqi, setAqi] = useState();

    const api={
        key:"f6bf196015464b5fb8273e5522911cfc",
        base:"https://api.openweathermap.org/data/2.5/",
    } 

    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    function getAirPollution(lon,lat)
    {
        try{
        fetch(`${api.base}air_pollution?lat=${lat}&lon=${lon}&appid=${api.key}`)
        .then(ap =>{
            return ap.json();
        })
        .then(displayAirPollution)
        .catch(error => {
            console.error('Error fetching air pollution data', error);
        });
        } catch{
            alert('Enter More Precise Location');
        }
    }

    function getLocation(city){
        try{
            fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then(weather=>{
                return weather.json();
            }).then(displayResults);
        } catch{
            alert('City Not Found')
        } 

        
    }

    useEffect(() => {
        console.log(aqi);
    }, [aqi]);
    

    function displayAirPollution(ap)
    {
        setData(ap)
        setAqi(ap.list[0].main.aqi)
        
    }

    function displayResults(weather){
        try{
            setLon(weather.coord.lon);
            setLat(weather.coord.lat);
            let loc = weather.name+ ", " + weather.sys.country;
            setLocation(loc);
            getAirPollution(weather.coord.lon, weather.coord.lat);
        }catch{
            alert('City Not Found')
        } 
    }

    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setCity(event.target.value);
            getLocation(event.target.value);
        }
    };

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1>Air Quality Detector</h1>
                        <input 
                            type="text" 
                            placeholder="Enter a Location..." 
                            class="location-search-box" 
                            onKeyDown={handleKeyPress}
                            />
                        <div>
                            {data && (
                                <div class="location">
                                    <div class="city">{location}</div>
                                    <div class="date">{date}</div>
                                    <div class="lat">Lat {lat}</div>
                                    <div class="lon">Lon {lon}</div>
                                </div>
                            )}
                            
                        </div>
                        <div>
                            {aqi === 1 && <Button color="success">Good</Button>}
                            {aqi === 2 && <Button color="success">Moderate</Button>}
                            {aqi === 3 && <Button color="warning">Unhealthy</Button>}
                            {aqi === 4 && <Button color="warning">Very Unhealthy</Button>}
                            {aqi === 5 && <Button color="danger">Hazardous</Button>}
                        </div>
                        <div>
                            {aqi === 1 && <div>	Air quality is considered satisfactory, and air pollution poses little or no risk</div>}
                            {aqi === 2 && <div>	Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</div>}
                            {aqi === 3 && <div>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</div>}
                            {aqi === 4 && <div>Health warnings of emergency conditions. The entire population is more likely to be affected.</div>}
                            {aqi === 5 && <div>Health alert: everyone may experience more serious health effects</div>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
