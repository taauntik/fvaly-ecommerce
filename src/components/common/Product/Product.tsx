import { IProduct } from 'Models/types';
import { Card, Col } from 'react-bootstrap';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  product: IProduct;
}

export default function Product({ product }: IProps) {
  const { name, image } = product;
  return (
    <Col md={3} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrlParser(image)} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
