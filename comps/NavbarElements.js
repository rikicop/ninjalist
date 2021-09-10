
import styled, { keyframes } from 'styled-components';
import { FaBars , FaTimes } from 'react-icons/fa';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

export const Barras = styled(FaBars)`
  animation: 0.2s linear ${spin};
  
`;

export const Cerrar = styled(FaTimes)`
  animation: 0.2s linear ${spin};
 
    
`;