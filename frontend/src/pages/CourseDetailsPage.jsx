import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'

class CourseDetailsPage extends Component {
  constructor({match}) {
    super();
    this.state={
      CoursePassedID:match.params.courseID
    }
  }

      // scroll your window from top.
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
        <Fragment>
            <TopNavigation title="Course Details " />  
            <PageTop pagetitle="Course Details" /> 
            <CourseDetails id={this.state.CoursePassedID}/>
            <Footer />
        </Fragment>
    )
  }
}

export default CourseDetailsPage