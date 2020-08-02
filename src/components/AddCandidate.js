import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container } from 'react-bootstrap'

const AddCandidate = () => {
    const onPost = (id) => {
        // console.log(id)
        if (id === -1) {
            console.log("Error! Cannot create Subscription")
        }
        else if (id === -2) {
            alert("candidate already exists!")
        }
        else {
            alert("new candidate created!")
            window.location.reload()
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            id: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            adminId: Yup.string()
                .required('Required'),
            id: Yup.string()
                .required('Required'),
            passcode: Yup.string()
                .required('Required'),
            expertise: Yup.string()
                .required('Required'),
            algorithms: Yup.string()
                .required('Required'),
            python: Yup.string()
                .required('Required'),
            solved: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            const expert_in = { "algorithms": values.algorithms, "python": values.python }
            const url = 'https://coda-poll-app.herokuapp.com/admin/candidates/add?name=' + values.name + '&admin_code=' + values.adminId + '&candidate_id=' + values.id + '&expertise=' + values.expertise + '&number_challenges_solved=' + values.solved + '&candidate_passcode=' + values.passcode + '&expert_in=' + expert_in;
            fetch(url)
                .then(response => response.json())
                .then(data => onPost(data))
                .catch(err => console.log(err))
        },
    });


    return (
        <Container className='pt-5'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="adminId">admin Id</Form.Label> {formik.touched.adminId && formik.errors.adminId ? (
                        <small className='error'>{formik.errors.adminId}</small>
                    ) : null}
                    <Form.Control type="text" placeholder="a001"
                        id="adminId"
                        name="adminId"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.adminId}
                    />
                    <Form.Text className="text-muted test">
                        for testing use "a001" without quotes
            </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="name">name</Form.Label> {formik.touched.name && formik.errors.name ? (
                        <small className='error'>{formik.errors.name}</small>
                    ) : null}
                    <Form.Control type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="solved">challenges solved</Form.Label> {formik.touched.solved && formik.errors.solved ? (
                        <small className='error'>{formik.errors.solved}</small>
                    ) : null}
                    <Form.Control type="text"
                        id="solved"
                        name="solved"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.solved}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="id">id</Form.Label> {formik.touched.id && formik.errors.id ? (
                        <small className='error'>{formik.errors.id}</small>
                    ) : null}
                    <Form.Control type="text"
                        id="id"
                        name="id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="passcode">passcode</Form.Label> {formik.touched.passcode && formik.errors.passcode ? (
                        <small className='error'>{formik.errors.passcode}</small>
                    ) : null}
                    <Form.Control type="text"
                        id="passcode"
                        name="passcode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passcode}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="expertise">expertise</Form.Label> {formik.touched.expertise && formik.errors.expertise ? (
                        <small className='error'>{formik.errors.expertise}</small>
                    ) : null}
                    <Form.Control as="select"
                        id="expertise"
                        name="expertise"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expertise}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="algorithms">algorithms</Form.Label> {formik.touched.algorithms && formik.errors.algorithms ? (
                        <small className='error'>{formik.errors.algorithms}</small>
                    ) : null}
                    <Form.Control as="select"
                        id="algorithms"
                        name="algorithms"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.algorithms}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="python">python</Form.Label> {formik.touched.python && formik.errors.python ? (
                        <small className='error'>{formik.errors.python}</small>
                    ) : null}
                    <Form.Control as="select"
                        id="python"
                        name="python"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.python}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form >
        </Container>
    )
}

export default AddCandidate