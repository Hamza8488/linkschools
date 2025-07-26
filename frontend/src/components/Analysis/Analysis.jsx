import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            Loading:true
      }
    }

    componentDidMount(){
      RestClient.GetRequest(AppUrl.ChartData).then(result=>{
        this.setState({data:result, Loading:false});
    })
    }

  render() {
    if(this.state.loading == true){
      return <Loading />
    } else {
    var blue = "#051b35"
    return (
 <Fragment>
    <Container className="text-center">
        <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="Techonology" />
                    <Tooltip />
                    <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
             </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
                <p className="text-justify serviceDescription">
                    Hi! I'm Ayaz Ahmed Mast. I'm a web developer with a serious love for teaching I am a founder of Al-Fateem Academy and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>
                    I am working for the last 15 years and have created several successful websites running on the internet. 
                    I try to create a project-based course that helps you to learn professionally and make you fell as a
                    complete developer. Al-Fateem Academy exists to help you succeed in life.
                </p>
          </Col>
    </Row>
    </Container>
 </Fragment>
    );
    } //end else
  }
}

export default Analysis