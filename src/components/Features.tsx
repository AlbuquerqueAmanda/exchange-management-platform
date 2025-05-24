import { Box, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import BookIcon from '@mui/icons-material/Book';
import FeedbackIcon from '@mui/icons-material/Feedback';

const features = [
  {
    icon: <DescriptionIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Gestão de Documentos',
    description:
      'Armazene e organize todos os seus documentos importantes. Nunca perca um prazo ou um arquivo novamente.',
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Calendário Interativo',
    description:
      'Acompanhe prazos, eventos e compromissos em um calendário intuitivo. Configure lembretes para nunca perder nada.',
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Gestão Financeira',
    description:
      'Controle suas despesas e acompanhe seu orçamento facilmente. Veja relatórios detalhados sobre seus gastos.',
  },
  {
    icon: <ContactsIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Contatos Importantes',
    description:
      'Mantenha um registro de contatos essenciais como coordenadores, embaixadas e serviços de emergência.',
  },
  {
    icon: <BookIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Diário Digital',
    description:
      'Registre suas experiências, anexe fotos e compartilhe momentos importantes do seu intercâmbio.',
  },
  {
    icon: <FeedbackIcon sx={{ fontSize: 36, color: '#0D47A1' }} />,
    title: 'Feedback e Avaliações',
    description:
      'Compartilhe suas impressões sobre o programa, instituição e cidade, ajudando outros estudantes.',
  },
];

export default function Features() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, md: 10 },
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {features.map(({ icon, title, description }) => (
          <Box
            key={title}
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              bgcolor: 'background.paper',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: '#BBDEFB', // azul claro de fundo
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              {icon}
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 1, fontWeight: 'bold', color: '#0D47A1' }}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
