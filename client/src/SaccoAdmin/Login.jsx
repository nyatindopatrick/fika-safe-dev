import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// reactstrap components
import {
  Button,
  Card,
  NavbarBrand,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  render() {
    const options = ["Admin", "Sacco"];
    const defaultOption = options[0];
    const { handleChange, handleSubmit, email, password } = this.props;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <div className="container div1" style={{ size: "50px" }}>
                  <NavbarBrand>
                    <img
                      alt="..."
                      src={require("assets/img/brand/fikas.png")}
                    />
                  </NavbarBrand>
                </div>

                <strong>Sign In </strong>
              </div>
              <Form onSubmit={handleSubmit} role="form" noValidate>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Password"
                      type="password"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>{" "}
                </div>
                <div className="text-center">
                  <h3>Sign in as</h3>
                  <Dropdown
                    options={options}
                    onChange={this._onSelect}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="/reset_password"
                // onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
