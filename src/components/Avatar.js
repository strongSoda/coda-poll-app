import React, { Component } from "react";
import Image from 'react-bootstrap/Image'

class Avatar extends Component {
    render() {
        return (
            <Image roundedCircle className='avatar mb-5' src={this.props.user.imageUrl} alt={this.props.user.name} />
        )
    }
}

export default Avatar