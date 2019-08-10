import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class Header extends React.Component {
  render() {
    //some basic javascript code
    // the data props is an array of objects
    const { data } = this.props;

    const activeArr = [];
    const deactivatedArr = [];
    // active saccos
    data.map(rider => {
      if (rider.status === 'Active') {
        activeArr.push(rider);
      }
    });
    let activeRiders = activeArr.length;

    // Deactivated saccos
    data.map(rider => {
      if (rider.status === 'Deactivated') {
        deactivatedArr.push(rider);
      }
    });
    let deactivatedRiders = deactivatedArr.length;

    // registered saccos
    const registeredRiders = data.length;

    return (
      <>
        <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sacco Code
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {1111}
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Registered Riders
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {registeredRiders}
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Active Riders
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {activeRiders}
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Deactivated Riders
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {deactivatedRiders}
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
