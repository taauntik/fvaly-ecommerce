import { Carousel, Col } from "react-bootstrap";

export default function BannerCarousel() {
  return (
    <Col lg={9} className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://waltonbd.com/image/catalog/home-page/slider/all-products-d.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://waltonbd.com/image/catalog/home-page/full-block/home-tv-block.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://waltonbd.com/image/catalog/home-page/full-block/zx4-desktop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
