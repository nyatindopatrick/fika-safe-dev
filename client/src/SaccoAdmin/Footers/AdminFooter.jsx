/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Nav } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2019{" "}
              <a
                className="font-weight-bold ml-1"
                href="#!"
                rel="noopener noreferrer"
              >
                Fika Safe
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
