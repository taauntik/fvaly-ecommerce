import { Container, Row } from 'react-bootstrap';
import { IProduct } from 'Models/types';
import Product from 'components/common/Product/Product';
import ProductSkeleton from 'skeletons/ProductSkeleton';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
  isSuccess: boolean;
}

const Products = ({ products, isLoading, isSuccess }: IProps) => {
  console.log('products', products);
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        {isLoading && <ProductSkeleton />}
        {isSuccess && (
          <Row className="align-items-stretch">
            {products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
