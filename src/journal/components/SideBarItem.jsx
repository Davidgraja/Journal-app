import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({ title= '' , body  , id ,  imageUrl = [] , date }) => {

    const newTitle = useMemo( () => {
        return (title.length > 17)  ? title.substring(0 , 17) + '...' : title
    } , [title])

    const dispatch = useDispatch();

    const onClickNote = () =>{
        dispatch(setActiveNote({title , body , id , imageUrl , date }));
    }

    return (
        <ListItem  disablePadding sx={{width:1}} >
            <ListItemButton onClick={ onClickNote }  >
                <ListItemIcon sx={{color:'secondary.main'}}>
                    <TurnedInNot/>
                </ListItemIcon>

                <Grid container alignItems='center' color={'info.main'} >
                    <ListItemText primary={newTitle} sx={{mr:1}}/>
                    <ListItemText secondary={body}  secondaryTypographyProps={{color:'info.main'}}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
