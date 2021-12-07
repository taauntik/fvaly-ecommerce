import { Col, ListGroup } from "react-bootstrap";

export default function Menu() {
  return (
    <Col lg={3}>
      <ListGroup>
        <ListGroup.Item action>Cras justo odio</ListGroup.Item>
        <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item action>Cras justo odio</ListGroup.Item>
        <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Col>
  );
}
