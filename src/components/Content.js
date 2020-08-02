import React, { useState, useEffect } from "react";
import Vote from "./Vote";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Content = (props) => {

    const [candidates, setCandidates] = useState([])
    const [candidatesLoading, setCandidatesLoading] = useState(true)
    const [candidate, setCandidate] = useState(null)
    const [refetchCandidates, setRefetch] = useState(false)

    useEffect(() => {
        const url = "https://coda-poll-app.herokuapp.com/candidates/";
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCandidates(data)
                setCandidatesLoading(false)
            })
            .catch(err => console.log(err))
    }, [refetchCandidates])

    const updateVotes = () => {
        setRefetch(true)
    }

    return (
        <Container>
            <Row className="p-5">
                <Col sm={7}>
                    <h2>Candidates</h2>
                    {candidatesLoading ? 'loading...' : (
                        <>
                            {candidates.length ? (
                                <ListGroup>
                                    {candidates.map(candidate => {
                                        return (
                                            <ListGroup.Item action href={'#' + candidate.id} key={candidate.id} onClick={(e => {
                                                setCandidate(candidate)
                                            })}>
                                                {candidate.name}
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            ) : '0 Candidates'}
                        </>
                    )}
                </Col>
                <Col sm={5}>
                    {candidate ? (
                        <div className="candidate">
                            <h2>{candidate.name}</h2>
                            <p>Votes: {candidate.votes}</p>
                            <p>Expertise: {candidate.expertise}</p>
                            <p>Challenges Solved: {candidate.number_challenges_solved}</p>
                            <p>Ratings: {candidate.expert_in}</p>
                            <Vote candidateId={candidate.id} userId={props.user.googleId} updateVotes={updateVotes} />
                        </div>
                    ) : ''}
                </Col>
            </Row>
        </Container>
    )
}

export default Content