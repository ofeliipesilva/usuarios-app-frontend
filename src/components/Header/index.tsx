import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aplicação de Usuários
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            onClick={() => navigate('/usuarios')}
            sx={{ 
              fontWeight: location.pathname === '/usuarios' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/usuarios' ? 'underline' : 'none'
            }}
          >
            Usuários
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
