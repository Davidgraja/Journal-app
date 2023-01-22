import { useEffect, useMemo } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active : noteActive} = useSelector( (state)=>  state.journal );

    const { title , body  , onEventInput , formState  , date} = useForm( noteActive );
    
    const newDate = useMemo( () =>{
        const reconstructionOfDate = new Date(date);
        return reconstructionOfDate.toUTCString();
    }, [date] )

    
    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    
    }, [ formState ])
    
    const onSaveNote = () =>{
        dispatch( startSaveNote() );
    }

    return (

        <Grid 
            container 
            direction='row' 
            justifyContent="space-between" 
            alignItems='center' 
            sx={{mb:1}} 
            className="animate__animated animate__fadeIn animate__faster" 
        >

            <Grid item>
                <Typography fontSize={39}  fontWeight="light" >{ newDate }</Typography>
            </Grid>

            <Grid item>
                <Button onClick={onSaveNote}  color='secondary' sx={{padding:1}}>
                    <SaveOutlined sx={{mr:1 , fontSize:28}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type='text'
                    variant='filled'
                    color='secondary'
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    fullWidth
                    sx={{border:'none' , mb:1}}
                    name='title'
                    value={title}
                    onChange={ onEventInput }
                />

                <TextField 
                    type='text'
                    variant='filled'
                    color='secondary'
                    multiline
                    placeholder='¿ Qué sucedió el dia de hoy ?'
                    fullWidth
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={ onEventInput }
                />
            </Grid>

            {/* images gallery */}

            <ImageGallery/>
        </Grid>
    )
}
