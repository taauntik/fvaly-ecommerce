import { Container } from "react-bootstrap";
import { BsPhone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function TopHeader() {
  return (
    <div className="top-header py-2 bg-light border-bottom">
      <Container className="d-flex align-items-center justify-content-between">
        <ul className="list-unstyled d-flex align-items-center gap-4">
          <li>
            <FiPhoneCall />
            <a href="tel:01657983128">01657983128</a>
          </li>
          <li>
            <FaRegEnvelope />
            <a href="mail-to:support@fvaly.com">support@fvaly.com</a>
          </li>
        </ul>
        <div>
          <BsPhone />
          <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop&hl=en&gl=US">
            Save big on our app!
          </a>
        </div>
      </Container>
    </div>
  );
}
