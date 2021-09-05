import React from 'react';
import {Button, Header, Segment} from "semantic-ui-react";
import cuid from 'cuid';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import {categoryData} from "../../../app/api/categoyOptions";


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

    const validationSchema = Yup.object({
        title: Yup.string().required('Podaj tytuł wydarzenia'),
        category: Yup.string().required('Podaj kategorię wydarzenia'),
        description: Yup.string().required('Podaj opis wydarzenia'),
        city: Yup.string().required('Podaj opis wydarzenia'),
        venue: Yup.string().required('Podaj opis wydarzenia'),
        date: Yup.string().required('Podaj opis wydarzenia'),
    })

    return (
        <Segment clearing>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
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
                    }>

                    <Form className={'ui form'} >
                        <Header sub color='teal' content='Szczegóły wydarzenia' />

                        <MyTextInput name='title' placeholder='Nazwa wydarzenia' />
                        <MySelectInput name='category' placeholder='Kategoria' options={categoryData}/>
                        <MyTextArea name='description' placeholder='Opis wydarzenia' rows={3}/>

                        <Header sub color='teal' content='Czas i miejsce' />

                        <MyTextInput name='city' placeholder='Miasto' />
                        <MyTextInput name='venue' placeholder='Lokalizacja' />
                        <MyTextInput name='date' placeholder='Data' type='date'/>

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
