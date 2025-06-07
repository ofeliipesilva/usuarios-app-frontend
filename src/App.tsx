// src/App.tsx
   import { BrowserRouter } from 'react-router-dom';
   import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

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
           <div className="App">
             <h1>Aplicação de Usuários</h1>
             {/* Aqui serão adicionados os componentes de rota */}
           </div>
         </BrowserRouter>
       </ThemeProvider>
     );
   }

   export default App;