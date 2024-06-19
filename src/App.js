import {Route, Routes} from "react-router-dom";
import Main from "./Component/Main";
import Header from "./Component/Header";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "./Component/Sidebar";
import BlogMain from "./Component/BlogMain";
import Post from "./Component/Post";

function App() {
  return (
    <>
        <Header/>
        <Container>
            <Routes>
                <Route path={'/'} element={<SidebarFrame><BlogMain/></SidebarFrame>}/>
                <Route path={'/post/'} element={<SidebarFrame><Post/></SidebarFrame>}/>
            </Routes>
        </Container>
    </>
  );
}

const SidebarFrame = ({ children }) => {
    return (
        <Row>
            <Col sm={"2"}><Sidebar/></Col>

            <Col style={{marginLeft: "15px", paddingLeft: "35px", borderLeft: "1px solid #d8d8d8"}}>
                {children}
            </Col>
        </Row>
    )
}

export default App;
