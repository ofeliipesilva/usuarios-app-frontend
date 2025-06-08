// src/pages/DadosPage/index.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import UsuarioDetails from '../../components/UsuarioDetails';
import type { Usuario } from '../../types';  // Alterado de UsuarioDetalhes para Usuario
import api from '../../services/api';

const DadosPage = () => {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<Usuario | null>(null);  // Alterado de UsuarioDetalhes para Usuario
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      if (!id) {
        setError('ID do usuário não fornecido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await api.get(`/usuarios/${id}`);
        setUsuario(response.data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar detalhes do usuário:', err);
        setError('Erro ao carregar detalhes do usuário. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [id]);

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Detalhes do Usuário
        </Typography>
      </Box>
      
      <UsuarioDetails 
        usuario={usuario} 
        loading={loading} 
        error={error} 
      />
    </Container>
  );
};

export default DadosPage;
