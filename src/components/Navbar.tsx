"use client";

import Link from "next/link";
import { AppBar, Toolbar, IconButton, Button, Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <MenuBookIcon sx={{ color: '#1D4ED8', mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1D4ED8' }}>
            ExchangeHub
          </Typography>
        </Box>

        {/* Links de navegação */}
        <Box display="flex" gap={3} sx={{ '& a': { textDecoration: 'none' } }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/documents">Documentos</Link>
          <Link href="/calendar">Calendário</Link>
          <Link href="/expenses">Despesas</Link>
          <Link href="/diary">Diário</Link>
          <Link href="/contacts">Contatos</Link>
        </Box>

        {/* Ícones + Botões */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>
            Entrar
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#1D4ED8', textTransform: 'none' }}>
            Registrar
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
