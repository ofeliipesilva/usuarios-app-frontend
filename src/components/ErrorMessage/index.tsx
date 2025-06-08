   import { Box, Typography } from '@mui/material';
   import type { ReactNode } from 'react'; // <-- Alterado aqui para import type

   interface ErrorMessageProps {
     message: string;
     action?: ReactNode;
   }

   const ErrorMessage = ({ message, action }: ErrorMessageProps) => {
     return (
       <Box 
         display="flex" 
         flexDirection="column" 
         justifyContent="center" 
         alignItems="center" 
         minHeight="200px"
         p={3}
         textAlign="center"
       >
         <Typography color="error" variant="h6" gutterBottom>
           Ops! Algo deu errado.
         </Typography>
         <Typography color="error" paragraph>
           {message}
         </Typography>
         {action && (
           <Box mt={2}>
             {action}
           </Box>
         )}
       </Box>
     );
   };

   export default ErrorMessage;
