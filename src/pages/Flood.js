import { Container, Row, Col } from 'react-bootstrap';
import "./emergencies.css";

const Flood = () => {

  return (
    <Container fluid="md">
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}><h4>Flood emergencies (wide)</h4></Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default Flood