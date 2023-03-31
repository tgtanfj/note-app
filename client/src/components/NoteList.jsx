import { Card, CardContent, Grid, List, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, Outlet, useParams, useLoaderData } from 'react-router-dom'

const NoteList = () => {
    const { folder } = useLoaderData()
    // const folder = { notes: [{ id: '1', content: '<p>xin chao moi nguoi</p>' }] }
    const { noteId } = useParams()
    const [activeNoteId, setActiveNoteId] = useState(noteId)
    return (
        <Grid container height='100%'>
            <Grid item xs={4} sx={{
                width: '100%', maxWidth: 360, bgcolor: '#F0EBE3',
                height: '100%', overFlowY: 'auto', padding: '10px', textAlign: 'left'
            }}
            >
                <List
                    subheader={
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
                        </Box>
                    }>
                    {folder.notes.map(({ id, content }) => {
                        return <Link
                            key={id}
                            to={`note/${id}`}
                            style={{ textDecoration: 'none'}}
                            onClick={() => setActiveNoteId(id)}
                        >
                            <Card sx={{ mg: '5px', mb: '5px', bgcolor: id === activeNoteId ? '#fffccc' : null }}>
                                <CardContent sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}>
                                    <div style={{ fontSize: 14 }}
                                        dangerouslySetInnerHTML={{ __html: `${content.substring(0, 30) || 'Empty'}` }}
                                    ></div>
                                </CardContent>
                            </Card>
                        </Link>
                    })}
                </List>
            </Grid>
            <Grid xs={8}>
                <Outlet />
            </Grid>
        </Grid>
    )
}

export default NoteList