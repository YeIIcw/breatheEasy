

import React , {useState, useEffect} from 'react';
import { Container, Row, Col, Table, Button} from 'reactstrap';

function SeverityButton(props) {
    const mode = props.mode;
    const value = props.value;
    if (value === 'TBD') {
        return (<Button color="secondary">TBD</Button>)
    }
    if (mode === "so2") {
        console.log("wasdwasdwasd\n\n")
        if (value < 20) {
            return (<Button color="success">Great</Button>)
        } else if (value < 80) {
            console.log("wasd\n\n\n\n\n\n\n")
            return (<Button color="success">Moderate</Button>)
        } else if (value < 250) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 350) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    } else if (mode === "no2") {
        if (value < 40) {
            return (<Button color="success">Great</Button>)
        } else if (value < 70) {
            return (<Button color="success">Moderate</Button>)
        } else if (value < 150) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 200) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    } else if (mode === "pm10") {
        if (value < 20) {
            return (<Button color="success">Great</Button>)
        } else if (value < 50) {
            return (<Button color="success">Moderate</Button>)
        } else if (value < 100) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 200) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    }
    else if (mode === "pm25") {
        if (value < 10) {
            return (<Button color="success">Great</Button>)
        } else if (value < 25) {
            return (<Button color="success">Moderate</Button>)
        } else if (value < 50) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 75) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    }
    else if (mode === "o3") {
        if (value < 60) {
            return (<Button color="success">Great</Button>)
        } else if (value < 100) {
            return (<Button color="success">Moderate</Button>)
        } else if (value < 140) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 180) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    }
    else if (mode === "co") {
        if (value < 4400) {
            return (<Button color="success">Great</Button>)
        } else if (value < 9400) {
            return (<Button color="success">Moderate</Button>)
        } else if (value < 12400) {
            return (<Button color="warning">Unhealthy</Button>)
        } else if (value < 15400) {
            return (<Button color="danger">Very Unhealthy</Button>)
        } else {
            return(<Button color = "danger">Dangerous</Button>)
        }
    }
}
export default SeverityButton;