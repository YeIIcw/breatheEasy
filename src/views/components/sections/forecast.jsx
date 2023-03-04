import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

const PageTable = () => {

    const api={
        key:"f6bf196015464b5fb8273e5522911cfc",
        base:"https://api.openweathermap.org/data/2.5/",
    } 

    return (
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
                                        <td>@Genelia</td>
                                    </tr>
                                    <tr>
                                        <td>Deshmukh</td>      
                                        <td>@Genelia</td>                           
                                    </tr>
                                    <tr>
                                        <td>Sanghani</td>     
                                        <td>@Genelia</td>                            
                                    </tr>
                                    <tr>
                                        <td>Roshan</td>   
                                        <td>@Genelia</td>                            
                                    </tr>
                                    <tr>
                                        <td>Joshi</td>  
                                        <td>@Genelia</td>                           
                                    </tr>
                                    <tr>
                                        <td>Nigam</td> 
                                        <td>@Genelia</td>                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTable;
