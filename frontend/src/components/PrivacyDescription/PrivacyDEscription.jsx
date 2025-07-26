import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loading from '../Loading/Loading';
import Parse from 'html-react-parser';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


export class PrivacyDEscription extends Component {
    constructor(){
    super();
    this.state={
      privacydesc:"...",
      Loading:true
    }
  }
    componentDidMount(){
      RestClient.GetRequest(AppUrl.Information).then(result=>{
          this.setState({privacydesc:result[0]['privacy'],Loading:false});
      }) 
  }
  render() {
        if(this.state.Loading == true) {
      return <Loading />
    } else {
    return (
            <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="serviceName">Privacy And Policy</h1>
              <hr />
              <p className="serviceDescription">
              {Parse(this.state.privacydesc)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }//endelse
  }
}

export default PrivacyDEscription