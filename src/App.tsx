// src/App.tsx
   import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
   import { CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
   import Header from './components/Header';
   import UsuariosPage from './pages/UsuariosPage';
   import DadosPage from './pages/DadosPage';

   // Cria um tema personalizado para o Material UI
   const theme = createTheme({
     palette: {
       primary: {
         main: '#1976d2',
       },
       secondary: {
         main: '#dc004e',
       },
     },
   });

   function App() {
     return (
       <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter>
           <Header />
           <Container>
             <Routes>
               <Route path="/" element={<Navigate to="/usuarios" replace />} />
               <Route path="/usuarios" element={<UsuariosPage />} />
               <Route path="/dados/:id" element={<DadosPage />} />
             </Routes>
           </Container>
         </BrowserRouter>
       </ThemeProvider>
     );
   }

   export default App;