** Algunos Detalles **

1. Tuve que instalar  "babel-preset-next": "^1.4.0", por que me daba un error por
usar styled components y crear un archivo llamado .babelrc con este contenido.
  {
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
  }
  
  
2. Efectos, lo que tuve que hacer para agregarle animaciòn a las FaBars... 
    
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

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
