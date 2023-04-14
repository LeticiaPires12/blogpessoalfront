// Importar as dependências
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import './Navbar.css'

// Interface para as propriedades do componente
interface NavbarProps {}

// Função Navbar
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#FF0084' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <Box mx={1}>
            <Typography variant="h6" color="inherit">
              <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                Início
              </Link>
            </Typography>
          </Box>
          <Box mx={1}>
            <Typography variant="h6" color="inherit">
              <Link to="/tema" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                Tema
              </Link>
            </Typography>
          </Box>
          <Box mx={1}>
            <Typography variant="h6" color="inherit">
              <Link to="/cadastrar-tema" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                Cadastrar Temas
              </Link>
            </Typography>
          </Box>
          <Box marginLeft="auto" display="flex"> {/* Usar Box para alinhar os elementos à direita */}
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginLeft: '16px',
                cursor: 'pointer', // Adicionar o estilo do cursor como pointer
              }}
            >
              
                <Typography variant="h6" color="inherit">
                Logout
              </Typography>
              
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
