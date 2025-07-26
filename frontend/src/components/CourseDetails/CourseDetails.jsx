import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'


export class CourseDetails extends Component {
    constructor(props) {
        super();
        this.state={
            MyCourseID:props.id,
            short_title:"...",
            small_img:"...",
            short_description:"...",
            total_duration:"...",
            total_leacture:"...",
            total_student:"...",
            long_description:"...",
            video_url:"..."
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.CoursesDetails+this.state.MyCourseID).then(result=>{
            this.setState({
                short_title:result[0]['short_title'],
                small_img:result[0]['small_img'],
                short_description:result[0]['short_description'],
                total_duration:result[0]['total_duration'],
                total_leacture:result[0]['total_lecture'],
                total_student:result[0]['total_student'],
                long_description:result[0]['long_description'],
                video_url:result[0]['video_url']
            });
        });
    }
  render() {
    return (
      <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <h1 className="coruseDetailsText">{this.state.short_title}</h1>
                        <img className="courseDetaisImg" src={this.state.small_img} />
                        <br></br> <br></br>
                        <p className="CoruseallDescription">
                            {this.state.short_description}
                        </p>    
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div class="widget_feature">
                            <h4 class="widget-title text-center">Course Features</h4>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span>{this.state.total_student}</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span>{this.state.total_duration}</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {this.state.total_leacture}</li>
                            </ul>
                            <div class="price-wrap text-center">
                                <h5>Price:<span>$35.00</span></h5>
                                <Button variant="warning">ENROLL COURSE</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br><br></br>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="widget_feature">
                            <h1 className="coruseDetailsText"> Skill You Need  </h1>   
                            <hr />    
                            <ul>
                                <li>{this.state.long_description}</li>

                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default CourseDetails