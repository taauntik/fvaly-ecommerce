import { Container, Row } from 'react-bootstrap';
import BannerCarousel from './BannerCarousel';
import Menu from './Menu';

export default function Banner() {
  return (
    <div>
      <Container>
        <Row>
          <Menu />
          <BannerCarousel />
        </Row>
      </Container>
    </div>
  );
}
