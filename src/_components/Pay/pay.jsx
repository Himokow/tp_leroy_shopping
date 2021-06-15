import React, {useState} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {Button, Card, Divider, Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import './pay.css'
import {addUserInfos} from "../../store/actions/user";
import {useDispatch} from "react-redux";

const Pay = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const formik = useFormik({
        initialValues: {
            email:  '',
            firstName: '',
            lastName:  '',
            phone:  '',
            address: '',
            more: '',
            city: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email invalide').required("L'email est requis"),
            firstName: Yup.string().required('Le prénom est requis'),
            lastName: Yup.string().required('Le prénom est requis'),
            phone: Yup.string().matches(phoneRegExp, 'N° de téléphone invalide'),
            address: Yup.string().required('La rue et le numéro est requis'),
            more: Yup.string(),
            city: Yup.string(),
        }),
        onSubmit: infos => {
            console.log(infos)
            dispatch(addUserInfos(infos));
            history.push('/payment')
        },
    });

    return (
        <form id="register_form" onSubmit={formik.handleSubmit}>
            <Card className="card no_scale">
                <Divider>Informations personnelles</Divider>
                <p>Veuillez saisir vos informations personnelles</p>
                <div className="form_container">
                    <label htmlFor="email" className="input_form">
                        Email
                        <Input id="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                    </label>
                    <label htmlFor="firstName" className="input_form">
                        Prénom
                        <Input id="firstName" {...formik.getFieldProps('firstName')} />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="error">{formik.errors.firstName}</div>
                        )}
                    </label>
                    <label htmlFor="lastName" className="input_form">
                        Nom
                        <Input id="lastName" {...formik.getFieldProps('lastName')} />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="error">{formik.errors.lastName}</div>
                        )}
                    </label>
                    <label htmlFor="phone" className="input_form">
                        Numéro de téléphone
                        <Input id="phone" type="phone" {...formik.getFieldProps('phone')} />
                        {formik.touched.phone && formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
                    </label>
                </div>
                <Divider>Adresse</Divider>
                <div className="form_container">
                    <p>Veuillez saisir votre adresse</p>
                    <label htmlFor="address" className="input_form">
                        Numéro et rue
                        <Input id="address" type="address" {...formik.getFieldProps('address')} />
                        {formik.touched.address && formik.errors.address && <div className="error">{formik.errors.address}</div>}
                    </label>
                    <label htmlFor="more" className="input_form">
                        Complément d&apos;adresse
                        <Input id="more" type="more" {...formik.getFieldProps('more')} />
                        {formik.touched.more && formik.errors.more && <div className="error">{formik.errors.more}</div>}
                    </label>
                    <label htmlFor="city" className="input_form">
                        Ville
                        <Input id="city" type="city" {...formik.getFieldProps('city')} />
                        {formik.touched.city && formik.errors.city && <div className="error">{formik.errors.more}</div>}
                    </label>
                </div>
            </Card>
            <Button
                type="primary"
                className="next_step_button"
                htmlType="submit"
                disabled={!(formik.isValid && formik.dirty)}
            >
                {/*<Link to='/payment'>*/}
                    Valider
                {/*</Link>*/}
            </Button>
        </form>
    )
};

export default Pay;