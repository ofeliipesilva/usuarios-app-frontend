// src/components/Header/index.tsx
   import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
   import { Link, useLocation } from 'react-router-dom';

   const Header = () => {
     const location = useLocation();
     
     return (
       <AppBar position="static">
         <Toolbar>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Aplicação de Usuários
           </Typography>
           <Box>
             <Button 
               color="inherit" 
               component={Link} 
               to="/usuarios"
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