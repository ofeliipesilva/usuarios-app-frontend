import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UsuariosList from '../../components/UsuariosList';
import type { Usuario } from '../../types';
import api from '../../services/api';

const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        setLoading(true);
        const response = await api.get('/usuarios');
        setUsuarios(response.data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        setError('Erro ao carregar usuários. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Usuários
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Clique em "Ver Detalhes" para visualizar informações completas do usuário.
        </Typography>
      </Box>
      
      <UsuariosList 
        usuarios={usuarios} 
        loading={loading} 
        error={error} 
      />
    </Container>
  );
};

export default UsuariosPage;
