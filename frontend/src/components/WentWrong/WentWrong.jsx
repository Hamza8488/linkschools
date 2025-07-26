import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../assets/images/error.svg';

export class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col>
                <img className="errorIcon"src={error} alt="Error 404" />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default WentWrong