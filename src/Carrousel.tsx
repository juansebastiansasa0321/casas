import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/fotos/fondos.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>
              Nulla vitae 4654654645 libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DarkVariantExample;
