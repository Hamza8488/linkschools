import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/design.png';
import ecommerceIcon from '../../assets/images/ecommerce.png';
import webIcon from '../../assets/images/web.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';


class Services extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            Loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Services).then(result => {
            this.setState({ myData: result, Loading:false });
        })
    }

    render() {
if (this.state.Loading == true) {
    return <Loading />
} else {
        const MyList = this.state.myData;
        const MyView = MyList.map(MyList => {
            return <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                    <img className="ecommerceIcon" src={MyList.service_logo} />
                    <h2 className="serviceName">{MyList.service_name}</h2>
                    <p className="serviceDescription">{MyList.service_description}</p>
                </div>
            </Col>
        });
        return (
            <Fragment>
                <Container className="text-center" >
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <div className="bottom"></div>
                    <Row>
                    {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
        } // end else
    }
}

export default Services