import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export const CardNote = ( {title , body} ) => {
  return ( 
    <Grid item >

        <Card sx={{ maxWidth: 345 }}>

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            { body }
            </Typography>
        </CardContent>
        <CardActions>
            <Button color='error' size="small">Eliminar</Button>
            <Button color='secondary' size="small">Leer mas</Button>
        </CardActions>

        </Card>

    </Grid>

 );
}