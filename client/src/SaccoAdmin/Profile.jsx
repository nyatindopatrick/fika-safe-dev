import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";
//Our higher order component
import withAuth from "withAuth.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rider: {},
      diabled: true,
      red: true,
      name: "active"
    };
  }
  // lifecycle control
  componentDidMount() {
    // this.setState({ id: this.props.id });
    const rider = this.props.rider;
    this.setState({
      rider
    });
  }

  // handle change
  handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    event.preventDefault();
    this.setState({
      rider: {
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveData(this.state.rider);
  };

  // onDeactivate:
  onDeactivate() {
    this.setState({ red: !this.state.red });
    this.setState({ name: !this.state.name });
  }

  // load Data for a specific sacc
  render() {
    let btn_class = this.state.red ? "info" : "danger";
    let btn_name = this.state.name ? "Active" : "Deactivated";
    //const { name,id} = this.props;
    console.log(this.props.rider);
    const {
      insuranceNumber,
      insuranceIssueDate,
      insuranceExpDate,
      bikeOwnerResidence,
      created,
      status,
      _id,
      first_name,
      sur_name,
      last_name,
      telephone_number,
      bikeOwner_fname,
      bikeOwner_lname,
      motorBikeMake,
      bikeMake,
      bikeBrand,
      bikeOwner_ID,
      bikeOwnerTelNumber,
      areaOfResidence,
      DLIssueDate,
      DLExpDate,
      Base,
      license_number,
      passport_ID,
      number_plate,
      drivingLicense,
      ratings,
      sacco
    } = this.props.rider;
    //console.log(id);
    return (
      <>
        <UserHeader name={`${first_name} ${last_name}`} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3" />
                </Row>

                <CardBody
                  style={{ background: "#e4f0f7" }}
                  className="pt-0 pt-md-4"
                >
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">{`${ratings} star`}</span>
                          <span className="description">Rider's Rating</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>{this.state.rider.name}</h3>
                    <h3 style={{ background: "#cee0eb", borderRadius: "10px" }}>
                      {btn_name}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {Base}, {areaOfResidence}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Insurance Number: {insuranceNumber}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Number Plate: {number_plate}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni education_hat mr-2" />
                      License Number: {license_number}
                    </div>
                    <hr className="my-4" />
                    <p>{`Insurance number  expires in ${moment(
                      insuranceExpDate
                    ).format("MM-DD-YYYY")}`}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Link to="/admin/logs">
                    <Button color="success">Logs</Button>
                  </Link>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Details</h3>
                    </Col>

                    <Col className="text-right" xs="4">
                      <Button
                        color={btn_class}
                        href="#pablo"
                        onClick={this.onDeactivate.bind(this)}
                        size="lg"
                      >
                        {btn_name}
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Rider Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              First Name:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={first_name}
                              onChange={this.handleChange}
                              name="first_name"
                              placeholder="Sacco Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Surname:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={sur_name}
                              onChange={this.handleChange}
                              name="sur_name"
                              placeholder="Sacco Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Last Name:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={last_name}
                              onChange={this.handleChange}
                              name="last_name"
                              placeholder="Sacco Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Passport/ID Number:
                            </label>
                            <Input
                              value={passport_ID}
                              name="passport_ID"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Enter email"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Driving License:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={drivingLicense}
                              name="drivingLicense"
                              onChange={this.handleChange}
                              placeholder="Enter License number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Issue Date:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={DLIssueDate}
                              name="DLIssueDate"
                              onChange={this.handleChange}
                              placeholder="Issue date"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Exp Date:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={DLExpDate}
                              name="DLExpDate"
                              onChange={this.handleChange}
                              placeholder="Exp date"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Area of Residence:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={areaOfResidence}
                              name="areaOfResidence"
                              onChange={this.handleChange}
                              placeholder="Year founded"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Operating Base:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={Base}
                              name="Base"
                              onChange={this.handleChange}
                              placeholder="Base"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      MotorBike Owner Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              First Name:
                            </label>
                            <Input
                              value={bikeOwner_fname}
                              name="bikeOwner_fname"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Enter first name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Last Name:
                            </label>
                            <Input
                              value={bikeOwner_lname}
                              name="bikeOwner_lname"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Enter last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Phone:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={bikeOwnerTelNumber}
                              name="bikeOwnerTelNumber"
                              onChange={this.handleChange}
                              placeholder="Enter Phone Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Passport/ID:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={bikeOwner_ID}
                              name="bikeOwner_Id"
                              onChange={this.handleChange}
                              placeholder="passport/ID"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Area of Residence:
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={bikeOwnerResidence}
                              name="bikeOwnerResidence"
                              onChange={this.handleChange}
                              placeholder="Enter area of residence"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                      MotorBike Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Brand:
                            </label>
                            <Input
                              value={bikeBrand}
                              name="bikeBrand"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="eg Boxer"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Make:
                            </label>
                            <Input
                              value={bikeMake}
                              name="bikeMake"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="eg BM-100"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Number Plate:
                            </label>
                            <Input
                              value={number_plate}
                              name="number_plate"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Enter plate number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Insurance Number:
                            </label>
                            <Input
                              value={insuranceNumber}
                              name="insuranceNumber"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Enter insurance nunber "
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Issue Date:
                            </label>
                            <Input
                              value={moment(insuranceIssueDate).format(
                                "MM-DD-YYYY"
                              )}
                              name="insuranceIssueDate"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Issue Date"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Exp Date:
                            </label>
                            <Input
                              value={moment(insuranceExpDate).format(
                                "MM-DD-YYYY"
                              )}
                              name="insuranceExpDate"
                              onChange={this.handleChange}
                              className="form-control-alternative"
                              placeholder="Exp Date "
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <div className="pl-lg-4">
                      <Button
                        color="info"
                        diabled="true "
                        onClick={this.handleSubmit}
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
