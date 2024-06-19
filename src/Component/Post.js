import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Col, Container, Pagination, Row} from "react-bootstrap";



const Post = () => {
    //const { id } = useParams();

    // pagination
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Row style={{border: "1px solid black", height: "200px", padding: "20px", marginBottom: "50px"}}>
                <Col>
                    <Row>
                        <Link to={"/"}>List 1</Link>
                    </Row>
                    <Row>
                        <Link to={"/"}>List 1</Link>
                    </Row>
                    <Row>
                        <Link to={"/"}>List 1</Link>
                    </Row>
                    <Row>
                        <Link to={"/"}>List 1</Link>
                    </Row>
                    <Row>
                        <Link to={"/"}>List 1</Link>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Col md={"2"} style={{textAlign: "center"}}>
                            <Pagination>{items}</Pagination>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{padding: "20px"}}>
                <Container>
                    <Row className={"mb-3"}>
                        <h4>Title</h4>
                    </Row>
                    <Row style={{marginBottom: "50px", borderBottom: "1px solid #999", paddingBottom: "20px"}}>
                        <Col>writer</Col>
                        <Col style={{textAlign: "right"}}>regDate</Col>
                    </Row>
                    <Row>
                        <Col>Content</Col>
                    </Row>
                </Container>
            </Row>
        </div>
    );
};

export default Post;