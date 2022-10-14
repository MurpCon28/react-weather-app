import { Container, Row, Col } from 'react-bootstrap';
import "./emergencies.css";

const Thunder = () => {

  return (
    <Container fluid="md">
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}><h4>Thunder and Lightning emergencies (wide)</h4></Col>
        <Col>3 of 3</Col>
      </Row>
      <br/>
      <Row>
        <Col>1 of 5</Col>
        <Col>2 of 5</Col>
        <Col>3 of 5</Col>
        <Col>4 of 5</Col>
        <Col>5 of 5</Col>
      </Row>
    </Container>
  )
}

export default Thunder