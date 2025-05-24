import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'Plataforma de Gestão de Intercâmbio',
  description: 'Centralize todas as informações do seu intercâmbio em um só lugar.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
