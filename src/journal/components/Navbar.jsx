import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton  from '@mui/material/IconButton';
import { LoginOutlined, MenuOutlined } from '@mui/icons-material';
import  Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';

export const Navbar = ({ drawerWidth }) => {
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
                    sx={{display:{sm:'none'} , mr:2}}
                >
                    <MenuOutlined/>
                </IconButton>
                
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap >Journal App</Typography>
                    <IconButton color='error'>
                        <LoginOutlined/>
                    </IconButton>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}
