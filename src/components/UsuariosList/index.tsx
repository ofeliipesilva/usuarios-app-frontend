// src/components/UsuariosList/index.tsx
   import { 
     Table, 
     TableBody, 
     TableCell, 
     TableContainer, 
     TableHead, 
     TableRow, 
     Paper, 
     Avatar, 
     Button,
     Typography,
     Box
   } from '@mui/material';
   import { useNavigate } from 'react-router-dom';
   import type { Usuario } from '../../types';
   import Loading from '../Loading';
   import ErrorMessage from '../ErrorMessage';

   interface UsuariosListProps {
     usuarios: Usuario[];
     loading: boolean;
     error: string | null;
   }

   const UsuariosList = ({ usuarios, loading, error }: UsuariosListProps) => {
     const navigate = useNavigate();

     const handleVerDetalhes = (id: number) => {
       navigate(`/dados/${id}`);
     };

     if (loading) {
       return <Loading message="Carregando usuários..." />;
     }

     if (error) {
       return <ErrorMessage message={error} />;
     }

     if (usuarios.length === 0) {
       return (
         <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
           <Typography>Nenhum usuário encontrado.</Typography>
         </Box>
       );
     }

     return (
       <TableContainer component={Paper} sx={{ mt: 4 }}>
         <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários">
           <TableHead>
             <TableRow>
               <TableCell>Avatar</TableCell>
               <TableCell>Nome</TableCell>
               <TableCell>Email</TableCell>
               <TableCell align="right">Ações</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {usuarios.map((usuario) => (
               <TableRow
                 key={usuario.id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell>
                   <Avatar src={usuario.avatar} alt={usuario.nome}>
                     {usuario.nome.charAt(0)}
                   </Avatar>
                 </TableCell>
                 <TableCell component="th" scope="row">
                   {usuario.nome}
                 </TableCell>
                 <TableCell>{usuario.email}</TableCell>
                 <TableCell align="right">
                   <Button 
                     variant="contained" 
                     size="small"
                     onClick={() => handleVerDetalhes(usuario.id)}
                   >
                     Ver Detalhes
                   </Button>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
     );
   };

   
   export default UsuariosList;