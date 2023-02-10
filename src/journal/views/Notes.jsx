import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CardNote } from '../components'
import { MenuUser } from '../pages/Menu'

export const Notes = () => {

    const {notes} = useSelector( state => state.journal )

    return (

        <>

            <MenuUser>

                <Grid container  justifyContent='space-evenly'  spacing={3}>
                    {

                        notes.map( note =>(
                            <CardNote key={note.id} { ...note }/>
                            
                        ) )

                    }

                </Grid>
            

            </MenuUser>

        </>

    )
}
