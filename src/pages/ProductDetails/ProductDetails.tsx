import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import imageUrlParser from 'utils/imageUrlParser';

interface IParams {
  id: string;
}

export default function ProductDetails() {
  const { id } = useParams<IParams>();
  const { data, isLoading, isSuccess, isError } = useAsync<IProduct>(() =>
    ProductService.getProductById(id)
  );

  const { name, image, description } = data as IProduct;
  return (
    <div>
      <Container>
        <div className="wrapper bg-white rounded">
          {isLoading && <h3>Loading...</h3>}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img
                  src={imageUrlParser(data ? image : '')}
                  alt={name}
                />
              </Col>
              <Col md={8}>
                <h3 className="mb-3">{name}</h3>
                <p>{description}</p>
                
              </Col>
            </Row>
          )}
          {isError && <h1>Error</h1>}
        </div>
      </Container>
    </div>
  );
}
