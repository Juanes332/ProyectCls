import * as React from 'react';
import { useState } from 'react';

interface useFieldProps {
    type: string,
}

export const useField = (props: useFieldProps) => {

    const [value, setValue] = useState('');

    const onChange = (newVal: React.ChangeEvent<any> | string) => {
        typeof newVal === 'string' ?
            setValue(newVal) : setValue(newVal.target.value);
    }

    return {
        type: props.type,
        value,
        onChange
    }
}