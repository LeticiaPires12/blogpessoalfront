import React from 'react'
import './Home.css'
import { Box, Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

const theme = createTheme({
    palette: {
      primary: {
        main: '#D29642',
      },
      secondary: {
        main : '#B85851',
      },
    }
  });

function Home() {
    return (
    <>
        <Grid container className='home'>
            <Grid alignItems="center" item xs={12} md={6} className='home_secao'>
                <Box paddingX={20} className='home_secao-opcao'>
                    <Typography variant="h3" className='opcao_item' component="h3" style={{fontWeight: "bold"}}>
                        Seja bem vindo(a)!
                    </Typography>
                    <Typography variant="h5" className='opcao_item' component="h5">
                        Sinta-se a vontade para expressar seus pensamentos e opiniões!
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color='secondary' style={{ borderRadius: "20px"}}>Ver Postagens</Button>
                    </ThemeProvider>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src="https://img.freepik.com/vetores-gratis/fada-da-borboleta-voadora_96037-465.jpg?w=2000" alt="" width="500px" height="500px" />
            </Grid>
            <Grid xs={12} style={{ backgroundColor: "white" }}>
            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>
            </Grid>
        </Grid>
    </>
    )
}

export default Home