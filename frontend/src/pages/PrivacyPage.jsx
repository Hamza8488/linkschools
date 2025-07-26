import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import PrivacyDEscription from '../components/PrivacyDescription/PrivacyDEscription'

class PrivacyPage extends Component {

    // scroll your window from top.
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Privacy & Policy"/>
        <PageTop pagetitle="Privacy & Policy" />
        <PrivacyDEscription />
        <Footer />
      </Fragment>
    )
  }
}

export default PrivacyPage