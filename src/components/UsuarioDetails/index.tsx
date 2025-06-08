import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box,
  Divider,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Usuario } from '../../types';
import Loading from '../Loading'; // Adicionado
import ErrorMessage from '../ErrorMessage'; // Adicionado

interface UsuarioDetailsProps {
  usuario: Usuario | null;
  loading: boolean;
  error: string | null;
}

const UsuarioDetails = ({ usuario, loading, error }: UsuarioDetailsProps) => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/usuarios');
  };

  if (loading) {
    return <Loading message="Carregando detalhes do usuário..." />;
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        action={
          <Button variant="contained" onClick={handleVoltar}>
            Voltar para Lista
          </Button>
        }
      />
    );
  }

  if (!usuario) {
    return (
      <ErrorMessage 
        message="Usuário não encontrado." 
        action={
          <Button variant="contained" onClick={handleVoltar}>
            Voltar para Lista
          </Button>
        }
      />
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
          
          {/* Substituindo Grid por Box e Stack para evitar problemas de tipagem */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 50%', minWidth: '250px' }}>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1" gutterBottom>
                {usuario.email}
              </Typography>
            </Box>
            
            <Box sx={{ flex: '1 1 50%', minWidth: '250px' }}>
              <Typography variant="body2" color="text.secondary">
                Telefone
              </Typography>
              <Typography variant="body1" gutterBottom>
                {usuario.telefone}
              </Typography>
            </Box>
            
            <Box sx={{ width: '100%' }}>
              <Typography variant="body2" color="text.secondary">
                Endereço
              </Typography>
              <Typography variant="body1" gutterBottom>
                {usuario.endereco}
              </Typography>
            </Box>
            
            <Box sx={{ flex: '1 1 50%', minWidth: '250px' }}>
              <Typography variant="body2" color="text.secondary">
                Data de Cadastro
              </Typography>
              <Typography variant="body1" gutterBottom>
                {usuario.dataCadastro}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsuarioDetails;