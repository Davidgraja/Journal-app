import { useState } from "react";

export const useForm = ( states = {} ) => {

    const [formState, setFormState] = useState( states );

    const onEventInput = ({target}) =>{
        const { name , value} = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    } 

    const onResetForm = () =>{
        setFormState(states)
    }


    return {
        ...formState,
        formState,
        onEventInput,
        onResetForm
    }
}