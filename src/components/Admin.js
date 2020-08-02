import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import AddCandidate from './AddCandidate'
import EditCandidate from './EditCandidate'
import DeleteCandidate from './DeleteCandidate'

const Admin = () => (
    <Container className="main">
        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className='pt-5'>
            <Tab eventKey="add" title="Add" href="#add">
                <AddCandidate />
            </Tab>
            <Tab eventKey="edit" title="Edit" href="#edit">
                <EditCandidate />
            </Tab>
            <Tab eventKey="delete" title="Delete" href="#delete">
                <DeleteCandidate />
            </Tab>
        </Tabs>
    </Container>
)

export default Admin