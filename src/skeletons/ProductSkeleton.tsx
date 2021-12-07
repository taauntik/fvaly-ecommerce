import { Col, Row } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductSkeleton() {
  return (
    <Row>
      {Array(12)
        .fill('')
        ?.map((item, index) => (
          <Col md={3} className="mb-3" key={index}>
            <Skeleton style={{ borderRadius: 5 }} height={330} />
          </Col>
        ))}
    </Row>
  );
}
