import { useDispatch, useSelector } from 'react-redux';

import { FormControlLabel, Switch, Typography  , IconButton , Grid , Toolbar , AppBar} from '@mui/material';
import { LoginOutlined, MenuOutlined } from '@mui/icons-material';

import { startLogout } from '../../store/auth/thunks';
import { onChangeDarkMode } from '../../store/theme/themeSlice';
import { setActiveNote } from '../../store/journal';

export const Navbar = ({ drawerWidth  , setState , state}) => {

    const {darkMode} = useSelector((state)=> state.theme);
    const dispatch = useDispatch(); 


    const onLogout = () =>{
        dispatch(startLogout());
        dispatch(setActiveNote(null))
    }
    
    return (
        <AppBar
            position='fixed'
            sx={{
                width : { sm: `calc(100%  - ${drawerWidth}px)`},
                ml:{sm: `${drawerWidth}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{display:{sm:'none'} , mr:2 }}
                    onClick={()=>setState(!state)}
                    
                >
                    <MenuOutlined/>
                </IconButton>
                
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap sx={{color:'secondary.main'}}>Journal App</Typography>

                    <FormControlLabel 
                        control={<Switch  color='success' checked={ darkMode } />} 
                        label='Dark mode' 
                        labelPlacement='end' 
                        onChange={()=> dispatch(onChangeDarkMode())}
                    />
                    
                    <IconButton color='error' onClick={ onLogout }>
                        <LoginOutlined/>
                    </IconButton>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}
