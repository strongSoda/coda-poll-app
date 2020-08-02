import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        <form onSubmit={formik.handleSubmit}>
            {/* <Form.Control type="email" placeholder={props.email} readOnly /> */}
            <div className='form_field'>
                <label htmlFor="adminId">admin Id <small>(for testing use "a001" without quotes)</small></label>
                <input
                    autoFocus
                    className='border_gray'
                    id="adminId"
                    name="adminId"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.adminId}
                /><br />
                <label htmlFor="name">name</label>
                <input
                    autoFocus
                    className='border_gray'
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <span>{formik.errors.name}</span>

                ) : null}
                <br />
                <label htmlFor="solved">challenges solved</label>
                <input
                    autoFocus
                    className='border_gray'
                    id="solved"
                    name="solved"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.solved}
                /><br />
                <label htmlFor="id">ID</label> {formik.touched.id && formik.errors.id ? (
                    <span>{formik.errors.id}</span>

                ) : null}
                <input
                    className='border_gray'
                    id="id"
                    name="id"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                /><br />

                <label htmlFor="passcode">passcode</label> {formik.touched.passcode && formik.errors.passcode ? (
                    <span>{formik.errors.passcode}</span>

                ) : null}
                <input
                    className='border_gray'
                    id="passcode"
                    name="passcode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passcode} />
                <br />
                <label htmlFor="expertise">expertise</label>
                <select
                    name="expertise"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">--SELECT--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label htmlFor="algorithms">algorithms</label>
                <select
                    name="algorithms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">--SELECT--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label htmlFor="python">python</label>

                <select
                    name="python"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">--SELECT--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            {/* <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label='Agree to Terms & Condition' />
        </Form.Group> */}
            <div className='form_field'>
                <input type="submit" value="Add" />
            </div>
        </form >
    )
}

export default AddCandidate