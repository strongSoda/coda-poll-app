import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import AddCandidate from './AddCandidate'
import EditCandidate from './EditCandidate'
import DeleteCandidate from './DeleteCandidate'

const Admin = () => (
    <Container className="main">
        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
            <Tab eventKey="add" title="Add">
                <AddCandidate />
            </Tab>
            <Tab eventKey="edit" title="Edit">
                <EditCandidate />
            </Tab>
            <Tab eventKey="delete" title="Delete">
                <DeleteCandidate />
            </Tab>
        </Tabs>
    </Container>
)

export default Admin