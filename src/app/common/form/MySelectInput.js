import React from 'react';
import {useField} from "formik";
import {FormField, Label, Select} from "semantic-ui-react";

const MyTextInput = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>  {/* !! - zwracam watość jako boolean.
                                                            Jeżeli jest string, zwraca TRUE, jeżeli nie ma, FALSE*/}
            <label>{label}</label>
            <Select
                clearable    // pozwala na wyczyszczenie kategorii
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </FormField>
    );
};

export default MyTextInput;