import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import AllCourse from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';


class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/service" component={AllServicePage} />
            <Route exact path="/course" component={AllCourse} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/refund" component={RefundPage} />
            <Route exact path="/terms" component={TermsPage} />
            <Route exact path="/privacy" component={PrivacyPage} />

            <Route exact path="/projectdetail/:projectID" component={ProjectDetailPage} />
            <Route exact path="/coursedetails/:courseID" component={CourseDetailsPage} />

        </Switch>
      </Fragment>
    )
  }
}

export default AppRouter