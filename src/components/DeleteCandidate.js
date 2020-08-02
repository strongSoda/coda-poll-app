import React from "react";
import { Form, Button, Container } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DeleteCandidate = (props) => {

    const onPost = (id) => {
        // console.log(id)
        if (id === -2) {
            alert("can't delete candidate!")
        }
        else {
            alert("candidate deleted!")
            window.location.reload()
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            id: ''
        },
        validationSchema: Yup.object({
            adminId: Yup.string()
                .required('Required'),
            id: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            const url = 'https://coda-poll-app.herokuapp.com/admin/candidates/delete?candidate_id=' + values.id + '&admin_code=' + values.adminId;
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
                    <Form.Label htmlFor="id">candidate id</Form.Label> {formik.touched.id && formik.errors.id ? (
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
                <Button variant="danger" type="submit">Delete</Button>
            </Form >
        </Container>
    )
}

export default DeleteCandidate