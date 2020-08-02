import React, { useState, useEffect } from 'react';

const Vote = (props) => {
    const { candidateId, userId } = { ...props }
    const [voted, setVoted] = useState(false)

    // console.log(candidateId, userId)

    const checkVote = () => {
        const url = "https://coda-poll-app.herokuapp.com/users/voted?googleId=" + props.userId;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setVoted(data)
            })
            .catch(err => console.log(err))
    }

    const cast_vote = () => {
        const url = "https://coda-poll-app.herokuapp.com/vote?googleId=" + userId + "&candidate_id=" + candidateId;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                // setVoted(data.voted)
                if (data) {
                    alert('Voted')
                    checkVote()
                    props.updateVotes && props.updateVotes()
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        checkVote()
    }, [])

    return (
        <>
            {voted ? '' :
                < button onClick={cast_vote} > Vote</button >
            }
        </>
    )
}

export default Vote