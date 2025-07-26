import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Parse from 'html-react-parser';


class TermsDescription extends Component {
    constructor(){
        super();
        this.state={
            termsdesc:"...",
            Loading:true
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({termsdesc:result[0]['terms'], Loading:false});
        })
    }

    render() {
            if(this.state.Loading == true) {
      return <Loading />
    } else {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Terms And Condition</h1>
                            <hr />
                            <p className="serviceDescription">
                                {Parse(this.state.termsdesc)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }//endelse
    }
}

export default TermsDescription