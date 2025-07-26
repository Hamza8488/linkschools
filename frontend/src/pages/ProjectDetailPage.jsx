import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'

class ProjectDetailPage extends Component {
  constructor({match}) {
    super();
    this.state={
      ProjectPassedID:match.params.projectID
    }
  }
      // scroll your window from top.
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details" />
        <PageTop pagetitle="Project Details" />
        <ProjectDetails id={this.state.ProjectPassedID} />
        <Footer />
      </Fragment>
    )
  }
}

export default ProjectDetailPage