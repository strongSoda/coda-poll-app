import React, { useContext } from 'react'
import { userContext } from '../userContext';
import Avatar from './Avatar'
import Content from './Content'
import { Container, Tabs, Tab } from 'react-bootstrap';
import Admin from './Admin'
import Candidate from './Candidate'

function Main(props) {
    const value = useContext(userContext)

    return (
        <Container className="main">
            <Avatar user={value} />
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home" href="#home">
                    <Content user={value} />
                </Tab>
                <Tab eventKey="admin" title="Admin" href="#admin">
                    <Admin />
                </Tab>
                <Tab eventKey="candidate" title="Candidate" href="#candidate">
                    <Candidate />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Main