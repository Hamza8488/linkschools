import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'

class AllServicePage extends Component {

    // scroll your window from top.
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="All Services"/>
        <PageTop pagetitle="All Services" />
        <Services />
        <Footer />
      </Fragment>
    )
  }
}

export default AllServicePage