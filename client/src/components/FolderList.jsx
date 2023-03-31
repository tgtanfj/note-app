import React, { useState } from 'react'
import { Card, CardContent, List, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Box } from '@mui/system'

const FolderList = ({ folders }) => {

    const { folderId } = useParams()

    const [activeFolderId, setActiveFolderID] = useState(folderId)

    return (
        <List sx={{
            width: '100%', bgcolor: '#7D9D9C', height: '100%',
            padding: '10px', textAlign: 'left', overflowY: 'auto',
        }}
            subheader={
                <Box>
                    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                        Folders
                    </Typography>
                </Box>
            }
        >
            {folders.map(({ id, name }) => {
                return (
                    <Link
                        key={id}
                        to={`folders/${id}`}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setActiveFolderID(id)}
                    >
                        <Card sx={{
                            mb: '5px',
                            backgroundColor:
                                id === activeFolderId ? 'rgb(255, 211, 140)' : null
                        }}>
                            <CardContent sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}
                            >
                                <Typography>{name}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </List>
    )
}

export default FolderList