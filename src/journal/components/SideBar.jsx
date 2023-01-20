import { useSelector } from 'react-redux'

import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBar = ({drawerWidth , showSideBar}) => {

    const {displayName} = useSelector( (state) => state.auth) 

    return (
        <Box
            component={'nav'}
            sx={{width:{sm:drawerWidth } , flexShrink: {sm: 0} }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display:{ xs: showSideBar ? 'block' : 'none', sm:'block'},
                    '& .MuiDrawer-paper' : {boxSizing:'border-box' , width : drawerWidth}
                }}
            >
            <Toolbar >
                <Typography variant='h6' noWrap component='div' sx={{color: 'secondary.main' }}>
                    {displayName}
                </Typography>
            </Toolbar>
                <Divider/>

                <List>
                    {
                        ['enero' , 'febrero' , 'marzo' , 'abril'].map( text =>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Dolore excepteur occaecat nostrud do Lorem esse exercitation id aute sit dolor pariatur ipsum.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List>

            </Drawer>
        </Box>
    )
}
