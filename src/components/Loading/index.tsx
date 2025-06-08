// src/components/Loading/index.tsx
   import { Box, CircularProgress, Typography } from '@mui/material';

   interface LoadingProps {
     message?: string;
   }

   const Loading = ({ message = 'Carregando...' }: LoadingProps) => {
     return (
       <Box 
         display="flex" 
         flexDirection="column" 
         justifyContent="center" 
         alignItems="center" 
         minHeight="200px"
       >
         <CircularProgress size={40} />
         <Typography variant="body1" sx={{ mt: 2 }}>
           {message}
         </Typography>
       </Box>
     );
   };

   export default Loading;