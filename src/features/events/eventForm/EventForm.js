import React, {useState} from 'react';
import {Button, Header, Segment, FormField} from "semantic-ui-react";
import cuid from 'cuid';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";
import {Formik, Form, Field} from "formik";


export default function EventForm ({match, history}) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) =>
        state.event.events.find((e) => e.id === match.params.id));

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent
            ? dispatch(updateEvent({...selectedEvent, ...values}))
            : dispatch(createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Kasia',
            attendees: [],
            hostPhotoURL: '/assets/user.png'
        }));
        history.push('/events');
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edytuj wydarzenie' : 'Utwórz nowe wydarzenie'} />
            <Formik initialValues={initialValues}
                    onSubmit={values => console.log(values)} >

                    <Form className={'ui form'} >
                        <FormField>
                            <Field name='title' placeholder='Nazwa wydarzenia' />
                        </FormField>
                        <FormField>
                            <Field name='categoy' placeholder='Kategoria' />
                        </FormField>
                        <FormField>
                            <Field name='dscription' placeholder='Opis wydarzenia' />
                        </FormField>
                        <FormField>
                            <Field name='city' placeholder='Miasto' />
                        </FormField>
                        <FormField>
                            <Field name='venue' placeholder='Lokalizacja' />
                        </FormField>
                        <FormField>
                            <Field name='date' placeholder='Data' type='date'/>
                        </FormField>
                        <Button type='submit' floated='right' positive content='Zatwiedź'/>
                        <Button
                            as={Link} to='/events'
                            type='submit'
                            floated='right'
                            content='Anuluj'
                        />
                    </Form>
            </Formik>
        </Segment>
    );
};
