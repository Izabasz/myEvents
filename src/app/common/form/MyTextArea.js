import React from 'react';
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

const MyTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>  {/* !! - zwracam watość jako boolean.
                                                            Jeżeli jest string, zwraca TRUE, jeżeli nie ma, FALSE*/}
            <label>{label}</label>
            <textarea {...field} {...props}/>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </FormField>
    );
};

export default MyTextArea;