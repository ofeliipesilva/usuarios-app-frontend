// src/components/UsuarioDetails/index.tsx
   import { 
     Card, 
     CardContent, 
     Typography, 
     Avatar, 
     Grid, 
     Divider,
     Box,
     CircularProgress,
     Button
   } from '@mui/material';
   import { useNavigate } from 'react-router-dom';
   import { UsuarioDetalhes } from '../../types';

   interface UsuarioDetailsProps {
     usuario: UsuarioDetalhes | null;
     loading: boolean;
     error: string | null;
   }

   const UsuarioDetails = ({ usuario, loading, error }: UsuarioDetailsProps) => {
     const navigate = useNavigate();

     const handleVoltar = () => {
       navigate('/usuarios');
     };

     if (loading) {
       return (
         <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
           <CircularProgress />
         </Box>
       );
     }

     if (error) {
       return (
         <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" flexDirection="column">
           <Typography color="error" gutterBottom>{error}</Typography>
           <Button variant="contained" onClick={handleVoltar}>Voltar para Lista</Button>
         </Box>
       );
     }

     if (!usuario) {
       return (
         <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" flexDirection="column">
           <Typography gutterBottom>Usuário não encontrado.</Typography>
           <Button variant="contained" onClick={handleVoltar}>Voltar para Lista</Button>
         </Box>
       );
     }

     return (
       <Box sx={{ mt: 4 }}>
         <Button variant="outlined" onClick={handleVoltar} sx={{ mb: 2 }}>
           Voltar para Lista
         </Button>
         
         <Card>
           <CardContent>
             <Box display="flex" alignItems="center" mb={3}>
               <Avatar 
                 src={usuario.avatar} 
                 alt={usuario.nome}
                 sx={{ width: 80, height: 80, mr: 2 }}
               >
                 {usuario.nome.charAt(0)}
               </Avatar>
               <Box>
                 <Typography variant="h5" component="div">
                   {usuario.nome}
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary">
                   {usuario.cargo} - {usuario.departamento}
                 </Typography>
               </Box>
             </Box>
             
             <Divider sx={{ my: 2 }} />
             
             <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                 <Typography variant="body2" color="text.secondary">
                   Email
                 </Typography>
                 <Typography variant="body1" gutterBottom>
                   {usuario.email}
                 </Typography>
               </Grid>
               
               <Grid item xs={12} sm={6}>
                 <Typography variant="body2" color="text.secondary">
                   Telefone
                 </Typography>
                 <Typography variant="body1" gutterBottom>
                   {usuario.telefone}
                 </Typography>
               </Grid>
               
               <Grid item xs={12}>
                 <Typography variant="body2" color="text.secondary">
                   Endereço
                 </Typography>
                 <Typography variant="body1" gutterBottom>
                   {usuario.endereco}
                 </Typography>
               </Grid>
               
               <Grid item xs={12} sm={6}>
                 <Typography variant="body2" color="text.secondary">
                   Data de Cadastro
                 </Typography>
                 <Typography variant="body1" gutterBottom>
                   {usuario.dataCadastro}
                 </Typography>
               </Grid>
             </Grid>
           </CardContent>
         </Card>
       </Box>
     );
   };

   export default UsuarioDetails;