import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { setActiveNote, startDeletingNote } from '../../store/journal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const CardNote = ( {title , body , id , imageUrl = [] , date } ) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteNote = () =>{
        dispatch(setActiveNote({id}));
        dispatch(startDeletingNote());
    }

    const onReadMore = () =>{
        dispatch(setActiveNote( {title , body , id , imageUrl, date } ));
        navigate('/')
    }

    return ( 
        <Grid item >

            <Card sx={{ maxWidth: 360 }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                { body }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onDeleteNote} color='error' size="small">Eliminar</Button>
                <Button onClick={ onReadMore } color='secondary' size="small">Leer mas</Button>
            </CardActions>

            </Card>

        </Grid>

    );
}