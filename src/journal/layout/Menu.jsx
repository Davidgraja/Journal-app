import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Swal from 'sweetalert2';
import { Create, Description, LoginOutlined, PersonRemove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteUser, startLogout } from '../../store/auth/thunks';
import { clearMessageSave, startNewNote } from '../../store/journal';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Grid, Switch } from '@mui/material';
import { onChangeDarkMode } from '../../store/theme/themeSlice';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const MenuUser = (  {children} ) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { displayName  , uid} = useSelector( state => state.auth );
  const { darkMode} = useSelector( state => state.theme );

  const dispatch = useDispatch(); 

  const navigate = useNavigate()


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onStartViewNotes = () =>{
    navigate('/notes');
    dispatch(clearMessageSave());
  }


  const onStartNewNote = () =>{
    navigate('/')
    dispatch(clearMessageSave())
    dispatch(startNewNote())
  }

  const onStartDeleteUser =  () =>{
    Swal.fire({
      title: '¿ Estas seguro de eliminar esta cuenta ?',
      text: "Se perdera toda tu información!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor:  '#3085d6',
      confirmButtonText: 'Eliminar cuenta',
      cancelButtonText : 'Cancelar'
    }).then( async (result) => {
      
      if (result.isConfirmed) {

        await dispatch(startDeleteUser());
        
        Swal.fire(
          'Eliminada!',
          'Tu cuenta ha sido eliminada',
          'success'
        )
      }

    })
  }

  const icons = [
    {icon : <LoginOutlined/> , text : 'salir' , clickEvent : () => dispatch(startLogout()) },
    {icon : <PersonRemove/> , text : 'Eliminar cuenta' , clickEvent : onStartDeleteUser},
    {icon : <Description/> , text : 'Mis notas' , clickEvent : onStartViewNotes  },
    {icon : <Create/> , text : '  Crear nueva nota' , clickEvent :  onStartNewNote },
  ]
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='primary' >
        <Toolbar sx={{display:'flex' }} >

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            { displayName }
          </Typography>
          
        </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            
            {

                icons.map( icon => (
                <ListItem disablePadding key={icon.text}>
                    <ListItemButton onClick={ icon.clickEvent } disabled={ icon.disableButton } >
                        <ListItemIcon>
                            {icon.icon}
                        </ListItemIcon>
                        <ListItemText primary={icon.text} />
                    </ListItemButton>
                </ListItem>
                ))

            }
          <FormControlLabel 
            control={
              <Switch  
                color='success' 
                checked={darkMode}  
              />}
            
            label='Dark mode' 
            labelPlacement='end' 
            onChange={()=> dispatch(onChangeDarkMode())}
            sx={{color:'secondary.switch' , ml:1}}
                          
          />
        </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />

            {children}

      </Main>
    </Box>
  );
}