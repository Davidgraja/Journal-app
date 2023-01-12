import { Toolbar } from "@mui/material";
import Box  from "@mui/system/Box"
import { useState } from "react";
import { Navbar, SideBar } from "../components";


const drawerWidth = 240;

export const JournalLayout = ({children}) => {

    const [State, setState] = useState(false)

    return (
        <Box 
            sx={{display:'flex'}} 
            component={'div'}
            
        >

            {/* Navbar drawerWidth*/}
            <Navbar drawerWidth={drawerWidth} setState={setState} state={State} />
            {/* Sidebar drawerWidth*/}
            <SideBar drawerWidth={drawerWidth} showSideBar = {State}/>
            
            <Box component={'main'} sx={{flexGrow:1 , p: 2}} onClick={()=>setState(false)} >

                <Toolbar   />

                { children  }

            </Box>

        </Box>
    )
}
