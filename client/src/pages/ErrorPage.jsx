import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div id='error-page'>
            <h1>Oops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <div style={{ margin: '10px' }}>
            </div>
        </div>
    )
}

export default ErrorPage