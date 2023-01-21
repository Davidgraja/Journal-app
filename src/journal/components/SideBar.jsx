import { useSelector } from 'react-redux';

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth , showSideBar}) => {

    const {displayName} = useSelector( (state) => state.auth );
    const {notes} = useSelector( (state) => state.journal );

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
                        notes.map( note =>(
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }

                </List>

            </Drawer>
        </Box>
    )
}
