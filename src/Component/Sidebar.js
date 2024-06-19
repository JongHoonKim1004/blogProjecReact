import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const [url, setUrl] = useState("https://images.unsplash.com/photo-1718703358030-c2a3f4fac3a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [username, setUsername] = useState("John Doe");

    return (
        <Col className={"px-1"}>
            <Row className={"pb-5"}>
                <Container style={{border: '1px solid black', padding: '1rem'}}>
                    <Col className={"mb-3"} style={{backgroundImage: `url(${url})`, backgroundSize: "cover", width: "100%", height: "200px"}}></Col>
                    <Col className={"mb-2"}>{username}</Col>
                    <Col>description</Col>
                </Container>
            </Row>
            <Row className={"mt-3"}>
                <Container>
                    <Row>
                        <Link to={"/"} style={{color: "#999", textDecoration: "none"}}>Board List</Link>
                    </Row>
                </Container>
            </Row>
        </Col>
    );
};

export default Sidebar;