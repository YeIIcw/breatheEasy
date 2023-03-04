import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { Button} from 'reactstrap';
import PageTable from "../../views/components/sections/table.jsx";



const HeaderBanner = () => {

    const [data, setData] = useState(); 
    const [forecast, setForecast] = useState();
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

    function formatLonLat(degree, type) {
        if (type == "lat") {
            if (degree >= 0) {
                return (degree + "\u00B0 N")
            }
            else {
                return ((-1) * degree + "\u00B0 S")
            }
        }
        else {
            if (degree >= 0) {
                return (degree + "\u00B0 E")
            }
            else {
                return ((-1) * degree + "\u00B0 W")
            }
        }
    }

    return (
        <div>
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1>BreatheEasy.</h1>
                        <input 
                            type="text" 
                            placeholder="Enter a City..." 
                            class="location-search-box" 
                            onKeyDown={handleKeyPress}
                            />
                        <div>
                            {data && (
                                <div class="location">
                                    <div class="city">{location}</div>
                                    <div class="date">{date}</div>
                                    <div class="lat">Latitude: {formatLonLat(lat, "lat")} </div>
                                    <div class="lon">Longitude: {formatLonLat(lon, "lon")}</div>
                                </div>
                            )}
                            
                        </div>
                        <div>
                            {aqi === 1 && <Button color="success">Great</Button>}
                            {aqi === 2 && <Button color="success">Moderate</Button>}
                            {aqi === 3 && <Button color="warning">Unhealthy</Button>}
                            {aqi === 4 && <Button color="danger">Very Unhealthy</Button>}
                            {aqi === 5 && <Button color="danger">Dangerous</Button>}
                        </div>
                        <div className = "rating-description">
                            {aqi === 1 && <div>	The air quality is ideal for most individuals; enjoy your normal outdoor activities.</div>}
                            {aqi === 2 && <div>	The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.</div>}
                            {aqi === 3 && <div> The air has reached a high level of pollution and is unhealthy for sensitive groups. Reduce time spent outside if you are feeling symptoms such as difficulty breathing or throat irritation.</div>}
                            {aqi === 4 && <div> Health effects can be immediately felt by sensitive groups. Healthy individuals may experience difficulty breathing and throat irritation with prolonged exposure. Limit outdoor activity.</div>}
                            {aqi === 5 && <div> Health effects will be immediately felt by sensitive groups and should avoid outdoor activity. Healthy individuals are likely to experience difficulty breathing and throat irritation; consider staying indoors and rescheduling outdoor activities.</div>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <PageTable data={data}/>
        </div>
    );
}

export default HeaderBanner;
