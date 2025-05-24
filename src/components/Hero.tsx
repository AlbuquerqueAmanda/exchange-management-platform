"use client";

import { Box, Button, Grid , Typography, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box component="section" sx={{ backgroundColor: "#DBEAFE", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Coluna do texto */}
          <Grid xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: "#1E3A8A", fontSize: { xs: "2rem", md: "2.5rem" } }}
              gutterBottom
            >
              Gerencie seu intercâmbio com <br /> facilidade
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#1E40AF" }}>
              Uma plataforma completa para organizar documentos, prazos, finanças e muito <br></br>mais, tornando sua experiência no exterior mais tranquila.
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#1E3A8A",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#1E40AF" },
                }}
              >
                Comece agora
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#1E3A8A",
                  color: "#1E3A8A",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "rgba(30, 58, 138, 0.1)" },
                }}
              >
                Saiba mais
              </Button>
            </Box>
          </Grid>

          {/* Coluna da imagem */}
          <Grid
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 4,
                p: 2,
                boxShadow: 3,
                maxWidth: 450,
                width: "100%",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Estudantes em intercâmbio"
                sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
