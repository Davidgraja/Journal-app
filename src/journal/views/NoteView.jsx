import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
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
        
        if( messageSaved?.type == 'update'){
            Swal.fire({
                position: 'center',
                icon:'success',
                title: 'Nota actualizada',
                showConfirmButton: false,
                timer: 1500
            });
        }
        

    }, [ messageSaved ])
    
    const onSaveNote = () =>{
        dispatch( startSaveNote() );
    }

    const  onFileInputChange = ({target}) =>{
        if(target.files === 0) return ;

        dispatch(startUploadingFiles(target.files));

    }

    const onDeleteNote = () =>{
        dispatch(startDeletingNote())
    }

    
    return (

        <Grid 
            container 
            direction='row' 
            justifyContent="space-between" 
            alignItems='center'
            sx={{mb:1 , backgroundColor:'primary.main' , padding:2 , borderRadius: 4}}
            className="animate__animated animate__fadeIn animate__faster" 
            
        >

            <Grid item>
                <Typography fontSize={39}  fontWeight="light" sx={{color:'info.main'}}>{ newDate }</Typography>
            </Grid>

            <Grid item>

                <input type="file" multiple onChange={ onFileInputChange }  style={{display:'none'} } ref={fileInputRef}  />

                <IconButton color='secondary' disabled={isSaving} onClick={ () => fileInputRef.current.click() } title ='Añadir imagenes' >
                    <UploadOutlined/>
                </IconButton>

                <Button onClick={onSaveNote}  color='secondary' sx={{padding:1}}  disabled={isSaving} >
                    <SaveOutlined sx={{mr:1 , fontSize:28}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container  >
                
                <TextField 
                    type='text'
                    variant='filled'
                    color='secondary'
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    fullWidth
                    sx={{border:'none' , mb:1 , backgroundColor:'secondary.light' , borderRadius:2}}
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
                    sx={{borderRadius:2,backgroundColor:'secondary.light'}}
                    fullWidth
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={ onEventInput }
                />
            </Grid>

            { <Grid container justifyContent='end'>

                <Button onClick={onDeleteNote} sx={{mt:2}} color='error'>
                    <DeleteOutline/>
                </Button>

            </Grid> }
            
            
            {/* images gallery */}

            <ImageGallery  images = { noteActive.imageUrl } />
        </Grid>
    )
}
