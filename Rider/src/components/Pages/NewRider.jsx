import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Footers/AdminFooter.jsx';
import AddRider from '../NewRidr.jsx';
import { Container } from 'reactstrap';

import AuthHelperMethods from 'AuthHelperMethods.js';
//Our higher order component
import withAuth from 'withAuth.js';

class Dashboard extends Component {
  render(props) {
    console.log(this.props.match.params.email);
    return (
      <>
        <Sidebar
          logo={{
            innerLink: '/sacco/home',
            imgSrc: require('assets/img/brand/argon-react.png'),
            imgAlt: '...',
          }}
        />
        <div
          style={{ marginLeft: '14.4%' }}
          className="main-content"
          ref="mainContent"
        >
          <AddRider email={this.props.match.params.email} />
          <Container fluid>
            <Footer />
          </Container>
        </div>
      </>
    );
  }
}

export default Dashboard;
