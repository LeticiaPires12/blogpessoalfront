import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, Grid, Typography } from '@mui/material'

function Footer() {
    return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box padding={1} style={{ backgroundColor: "#FF0084", height: "80px" }}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/leticia.lindinha.560" target="_blank">
                            <FacebookIcon style={{ fontSize: 30, color: "white" }} /></a>
                        <a href="https://www.instagram.com/lehpires_/" target="_blank">
                            <InstagramIcon style={{ fontSize: 30, color: "white" }} /></a>
                        <a href="https://www.linkedin.com/in/leticia-pires-de-souza-5a1031203/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 30, color: "white" }} /></a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#FF0084", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://www.linkedin.com/in/caroline-viana-de-medeiros/">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Letícia Pires</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}

export default Footer