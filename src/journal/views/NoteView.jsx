import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css' 
import { useRef } from 'react';


export const NoteView = () => {

    const dispatch = useDispatch();
    const {active : noteActive , messageSaved , isSaving } = useSelector( (state)=>  state.journal );

    const { title , body  , onEventInput , formState  , date} = useForm( noteActive );
    
    const fileInputRef = useRef();

    const newDate = useMemo( () =>{
        const reconstructionOfDate = new Date(date);
        return reconstructionOfDate.toUTCString();
    }, [date] )

    
    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    
    }, [ formState ])


    useEffect(()=>{
    
        if( messageSaved.length > 0 ){
            Swal.fire('Nota Actualizada' , messageSaved , 'success');
        }

    }, [ messageSaved ])
    
    const onSaveNote = () =>{
        dispatch( startSaveNote() );
    }

    const  onFileInputChange = ({target}) =>{
        if(target.files == 0) return ;

        console.log('subiendo archivos');
        console.log(target.files);

        // dispatch(startUploadingFiles(target.files));

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

                <input type="file" multiple onChange={ onFileInputChange }  style={{display:'none'} } ref={fileInputRef} />

                <IconButton color='secondary' disabled={isSaving} onClick={ () => fileInputRef.current.click() }  >
                    <UploadOutlined/>
                </IconButton>

                <Button onClick={onSaveNote}  color='secondary' sx={{padding:1}}  disabled={isSaving} >
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
