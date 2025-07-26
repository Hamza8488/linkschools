import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Parse from 'html-react-parser';
import Loading from "../Loading/Loading";

class RefundDescription extends Component {
  constructor(){
    super();
    this.state={
      refunddesc:"...",
      Loading:true
    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.Information).then(result=>{
      this.setState({refunddesc:result[0]['refund'], Loading:false});
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
                            <h1 className="serviceName">Data Protection Principles</h1>
                            <hr />
                            <p className="serviceDescription">
                                {Parse(this.state.refunddesc)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }//endelse
    }
}

export default RefundDescription
