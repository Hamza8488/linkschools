import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import whitelogo from '../../assets/images/logo_white.png';
import blacklogo from '../../assets/images/logo_black.png';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {

  
    constructor(props) {
        super();
        this.state={
         navBarTitle:"navTitle",
         navBarLogo:[whitelogo], // object
         navBarBack:"navBackground",
         navBarItem:"navItem",
         navVarient:"dark",
         pageTitle:props.title
        }
    }

onScroll=() => {
    if (window.scrollY>100) {
    this.setState({
        navBarTitle:'navTitleScroll',
        navBarLogo:[blacklogo],
        navBarBack:"navBackgroundScroll",
        navBarItem:"navItemScroll",
        navVarient:"light",


    })
    } else if (window.scrollY<100) {
        this.setState({
        navBarTitle: 'navTitle',
        navBarLogo: [whitelogo],
        navBarBack:"navBackground",
        navBarItem:"navItem",
        navVarient:"dark",


        })
    }
}

componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
}


  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle }</title>
        <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" bg="dark" variant={this.state.navVarient}>
          <Container>
            {/* <Navbar.Brand href="#home">Links School</Navbar.Brand> */}
            <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"> 
              </Nav>
              <Nav>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/">HOME </NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/about">ABOUT </NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/service">SERVICE </NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/course">COURSES </NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/portfolio">PORTFOLIO </NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeClassName="active-link" className={this.state.navBarItem} to="/contact">CONTACT US </NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation