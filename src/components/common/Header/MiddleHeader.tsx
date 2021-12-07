import Button from "@restart/ui/esm/Button";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import fvaly from "assets/images/fvaly.png";

export default function MiddleHeader() {
  return (
    <div className="middle-header">
      <Container>
        <div className="d-flex align-items-center gap-5 p-3">
          <img className="branding" src={fvaly} alt="" />
          <InputGroup>
            <FormControl
              placeholder="Search here..."
              className="border border-primary"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="btn btn-primary" id="button-addon2">
              <BiSearch className="text-white" />
            </Button>
          </InputGroup>
          <ul className="icon-list list-unstyled d-flex gap-3">
            <li>
              <FiShoppingBag />
            </li>
            <li>
              <BiUser />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
