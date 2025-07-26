import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoaderIcon from '../../assets/images/loader.svg';

class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col>
                <img classname="LoaderAnimation" src={LoaderIcon}/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Loading