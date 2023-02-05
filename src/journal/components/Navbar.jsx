import { useDispatch, useSelector } from 'react-redux';

import { FormControlLabel, Switch, Typography  , IconButton , Grid , Toolbar , AppBar, Button} from '@mui/material';
import { DeleteOutline, LoginOutlined, MenuOutlined } from '@mui/icons-material';

import { startDeleteUser, startLogout } from '../../store/auth/thunks';
import { onChangeDarkMode } from '../../store/theme/themeSlice';
import Swal from 'sweetalert2';

export const Navbar = ({ drawerWidth  , setState , state}) => {

    const {darkMode} = useSelector((state)=> state.theme);
    const dispatch = useDispatch(); 


    const onLogout = () =>{
        dispatch(startLogout());
    }
    
    const onDeleteUser = () =>{

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
              
            },
            buttonsStyling: true
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿ Estas seguro de realizar esta acción ?',
            text: "Se perderan toda tu información ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            confirmButtonColor:'#E74C3C',
            cancelButtonText: 'Cancelar',
            cancelButtonColor:'#2ECC71',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeleteUser());
                swalWithBootstrapButtons.fire(
                    'Usuario Eliminado!',
                    'Toda tu informacion se ha eliminado',
                    'success'
                )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                
              )
            }
          })

    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width : { sm: `calc(100%  - ${drawerWidth}px)`},
                ml:{sm: `${drawerWidth}px`},
                padding:{sm:1 , xs:1}
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
                        sx={{color:'secondary.switch'}}
                    />

                    <Button  variant='contained' startIcon={<DeleteOutline/>} onClick={ onDeleteUser }>
                    Eliminar cuenta
                    </Button>
                    
                    <IconButton color='error' onClick={ onLogout }>
                        <LoginOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
