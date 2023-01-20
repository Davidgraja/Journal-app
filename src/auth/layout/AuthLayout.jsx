import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { onChangeDarkMode } from '../../store/auth';

export const AuthLayout = ({ children , title=""}) => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector((state)=> state.theme);


    return (
        <Grid 
            container
            direction="row"
            sx={{minHeight : '100vh' ,backgroundColor: 'primary.main' , padding: 4}}
        >
            <Grid
                container
                direction='row'
                justifyContent='end'
                alignContent='start'
                
                
            >
                <FormControlLabel 
                        control={<Switch  color='success' checked={darkMode}  />} 
                        label='Dark mode' 
                        labelPlacement='end' 
                        onChange={()=> dispatch(onChangeDarkMode())}
                        sx={{color:'secondary.light'}}
                        
                />
            </Grid>

            <Grid 
            container
            
            direction="column"
            alignSelf='start'
                justifyContent='center'
                alignContent={'center'}            
            >
            
            
            <Grid 
                item
                className='box-shadow'
                xs={3}
                sx={
                    {backgroundColor:'white' , padding: 3 , borderRadius: 2 , width:{sm: 450 ,  }}
                }
            >
                <Typography variant='h5' sx={{mb:1}} >{title}</Typography>
            
                { children }

            </Grid>
        
        </Grid>
        </Grid>
    )
}
