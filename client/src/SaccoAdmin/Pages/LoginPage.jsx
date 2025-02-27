import React from "react";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import Login from "../Login.jsx";
import AuthNavbar from "../Navbars/AuthNavbar.jsx";
import AuthFooter from "../Footers/AuthFooter";

import AuthHelperMethods from "AuthHelperMethods.js";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  Auth = new AuthHelperMethods(); // instantiating the method helper class
  // onChange handlers
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  // onSubmit handlers
  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    this.Auth.login(email, password)
      .then(res => {
        if (res === false) {
          return alert("Sorry those credentials don't exist!");
        }
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err);
      });
  };
  componentWillMount() {
    /* Here is a great place to redirect someone who is already logged in to the protected route */
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-success py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7" />
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Login
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                email={email}
                password={password}
              />
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default LoginPage;
