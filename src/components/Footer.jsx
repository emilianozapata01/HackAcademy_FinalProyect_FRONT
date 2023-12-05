import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import FooterStyle from "../styles/components/Footer.module.css";
import ContactUsModal from "./ContactUsModal";

const Footer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container
      fluid
      className="text-footer mt-5"
      id="Footer_text-footer__FtDZ2"
    >
      <Row className="text-bg-light p-3">
        <Col md={4}>
          <Image
            src="https://juiceshop.com/cdn/shop/files/FooterCartLogo3_600x_920720f9-3e86-4aa4-9469-6d5d4c3402db_400x.png?v=1674091452"
            alt="truck-img"
            className="w-50 ms-2 mt-4"
          />
        </Col>

        <Col md={3} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="/all-products">
              <span className={`${FooterStyle.navItem}`}>ALL PRODUCTS</span>
            </Nav.Link>
            <Nav.Link href="/sustainability">
              <span className={`${FooterStyle.navItem}`}>SUSTAINABILITY</span>
            </Nav.Link>
            <Nav.Link href="/frequently-asked-questions">
              <span className={`${FooterStyle.navItem}`}>FAQ</span>
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={3} className="pt-4">
          <Nav className="flex-column">
            <Nav.Link href="https://www.facebook.com/juiceshopsf/">
              <span className={`bi bi-facebook ${FooterStyle.facebook}`}></span>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/juiceshopsf/">
              <span
                className={`bi bi-instagram ${FooterStyle.instagram}`}
              ></span>
            </Nav.Link>
            <Nav.Link href="#" onClick={handleShow}>
              <span
                className={`bi bi-envelope-at ${FooterStyle.message}`}
              ></span>
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={2}>
          <Image src="js.png" alt="logo-img" className="w-50 ms-2 mt-4" />
          <p>© 2023 JUICE SHOP</p>
        </Col>
      </Row>

      <ContactUsModal showModal={showModal} handleClose={handleClose} />
    </Container>
  );
};

export default Footer;
