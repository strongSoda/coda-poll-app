import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import { Row, Col, Jumbotron } from "react-bootstrap";

class Avatar extends Component {
    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col sm={3}>
                        <Image roundedCircle className='avatar mb-5' src={this.props.user.imageUrl} alt={this.props.user.name} />
                    </Col>
                    <Col sm={9}>
                        <h2>vote for your favorite hackers</h2>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}

export default Avatar