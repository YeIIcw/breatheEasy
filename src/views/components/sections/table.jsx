import React , {useState, useEffect} from 'react';
import { Container, Row, Col, Table, Button} from 'reactstrap';
import SeverityButton from './sevButton';


const PageTable = (props) => {
    const [SO2, setSO2] = useState('TBD');
    const [NO2, setNO2] = useState('TBD');
    const [PM10, setPM10] = useState('TBD');
    const [PM25, setPM25] = useState('TBD');
    const [O3, setO3] = useState('TBD');
    const [CO, setCO] = useState('TBD');

    try {
        setSO2(props.data.list[0].components.so2)
        setNO2(props.data.list[0].components.no2)
        setPM10(props.data.list[0].components.pm10)
        setPM25(props.data.list[0].components.pm2_5)
        setO3(props.data.list[0].components.o3)
        setCO(props.data.list[0].components.co)
    }
    catch{
        //pass
    }

    // console.log(SO2)

    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Concentration (μg/m<sup>3</sup>)</th>
                                        <th>Severity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SO<sub>2</sub></td>
                                        <td className = "table-description">Short-term exposure to sulfur dioxide irritates <br/>
                                            the airways, causing coughing, wheezing, and <br/>
                                            tightness in the chest. Long-term exposure may <br/>
                                            result in decreased lung capacity.</td>
                                        <td>{SO2}</td>
                                        
                                        <td>{<SeverityButton value={SO2} mode = "so2"/>}</td>
                                    </tr>
                                    <tr>
                                        <td>NO<sub>2</sub> </td>
                                        <td>Exposure to high concentrations of nitrogen dioxide  <br/>
                                            can cause inflammation of the airways and <br/> 
                                            increase susceptibility to respiratory <br/> 
                                            infections and to allergens.</td>
                                        <td>{NO2}</td>
                                        <td>{<SeverityButton value={NO2} mode = "no2"/>} </td>
                                    </tr>
                                    <tr>
                                        <td>PM<sub>10</sub></td>
                                        <td>Exposure to high amounts of PM<sub>10</sub> can<br/>
                                            result in a number of health impacts ranging <br/>
                                            from asthma attacks and bronchitis, to <br/>
                                            strokes and premature death.</td>
                                        <td>{PM10}</td>
                                        <td>{<SeverityButton value={PM10} mode = "pm10"/>} </td>
                                    </tr>
                                    <tr>
                                        <td>PM<sub>2.5</sub></td>
                                        <td>PM<sub>2.5</sub> (particles &lt; 2.5μm in diameter) <br/>
                                            can penetrate deeply into the lung, <br/>
                                            irritate and corrode the alveolar wall, <br/>
                                            and consequently impair lung function.</td>
                                        <td>{PM25}</td>
                                        <td>{<SeverityButton value={PM25} mode = "pm25"/>} </td>
                                    </tr>
                                    <tr>
                                        <td>O<sub>3</sub></td>

                                        <td>Breathing ground-level ozone can <br/>
                                            trigger a variety of health problems <br/>
                                            including chest pain, coughing, <br/>
                                            throat irritation, and congestion.</td>

                                        <td>{O3}</td>
                                        <td>{<SeverityButton value={O3} mode = "o3"/>} </td>
                                    </tr>
                                    <tr>
                                        <td>CO</td>
                                        <td>Carbon monoxide, when breathed, <br/>
                                            displaces oxygen in the blood <br/>
                                            and deprives the heart, brain <br/>
                                            and other vital organs of oxygen.</td>
                                        <td>{CO}</td>
                                        <td>{<SeverityButton value={CO} mode = "co"/>} </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
            <div className="spacer" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Forecast</h1>
                            <h6 className="subtitle">Here are the predicted concentrations for the next 5 days</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Deshmukh</td>
                                        <td>Status</td>
                                    </tr>
                                    <tr>
                                        <td>Deshmukh</td>      
                                        <td>Status</td>                           
                                    </tr>
                                    <tr>
                                        <td>Sanghani</td>     
                                        <td>Status</td>                            
                                    </tr>
                                    <tr>
                                        <td>Roshan</td>   
                                        <td>Status</td>                            
                                    </tr>
                                    <tr>
                                        <td>Joshi</td>  
                                        <td>Status</td>                           
                                    </tr>
                                    <tr>
                                        <td>Nigam</td> 
                                        <td>Status</td>                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
}

export default PageTable;
