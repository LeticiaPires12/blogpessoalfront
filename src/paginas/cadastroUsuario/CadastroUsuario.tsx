import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import  User  from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {

  const history = useNavigate()

  const [usuario, setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  })
  
  const [usuarioResult, setUsuarioResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  })

  const [confirmarSenha,setConfirmarSenha] = useState<String>("")
  
  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(event.target.value)
}

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    if(confirmarSenha === usuario.senha) {
      try {
        await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
        toast.success('Usuário cadastrado com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
      } catch (error) {
        toast.error('Por favor, verifique os campos', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
      }
    } else {
      alert('As senhas não coincidem')
      setConfirmarSenha('')
      setUsuario({
        ...usuario,
        senha: ''
      })
    }
  }

  useEffect(() => {
    console.log('Deu certo!')
  }, [usuario.nome])

  useEffect(() => {
    if(usuarioResult.id !== 0) {
      history('/login')
    }
  }, [usuarioResult])

  function back() {
    history('/login')
  }


  return (
    <>
    <Grid container alignItems={'center'}>
        <Grid item xs={6} ></Grid>
        <Grid item xs={6} justifyContent='center' >
          <Box display='flex' justifyContent={'center'} >
            <Grid item xs={8} >
              <form onSubmit={onSubmit}>
                <Typography variant='h3' align='center' gutterBottom fontWeight='bold'>Cadastrar</Typography>
                <TextField
                  variant='outlined'
                  name='nome'
                  value={usuario.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  label='Nome completo'
                  margin='normal'
                  fullWidth />
                <TextField
                  variant='outlined'
                  name='usuario'
                  value={usuario.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  label='Usuário (endereço de e-mail)'
                  margin='normal'
                  fullWidth />
                <TextField
                  type='password'
                  name='senha'
                  value={usuario.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  variant='outlined'
                  label='Senha'
                  margin='normal'
                  fullWidth />
                <TextField
                  type='password'
                  name='confirmarSenha'
                  value={confirmarSenha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                  variant='outlined'
                  label='Confirmar Senha'
                  margin='normal'
                  fullWidth />
                  
                <Box marginY={2} display={'flex'} justifyContent={'space-around'} gap={4}>

                      <Button onClick={back} size='large' variant='contained' color='error' fullWidth>
                        {/* <Link to='/login'> */}
                          Cancelar
                        {/* </Link> */}
                      </Button>
                    <Button type='submit' size='large' variant='contained' fullWidth>Cadastrar</Button>
                  
                </Box>
            </form>
            
            </Grid>
          </Box>
        </Grid>
        
      </Grid>
      
    </>
  )
}

export default CadastroUsuario