import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const BlogMain = () => {
    return (
        <div className={"mx-1"}>
            <Row>
                <Container style={{padding:'2rem', border: "1px solid #999"}}>
                    <img alt={""} src={"https://images.unsplash.com/photo-1718471472310-77a63c5fad95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} style={{width: "100%", maxHeight: "500px"}}/>
                </Container>
            </Row>
            <Row className={"mt-3"}>
                <Container>
                    <Row className={"mt-3 mb-3"}>
                        <h4>최신 글 목록</h4>
                    </Row>
                    <Row>
                        <Link to={"/post/"} style={{color: "#333", textDecoration: "underline"}}>blog list</Link>
                    </Row>

                </Container>
            </Row>
        </div>
    );
};

export default BlogMain;