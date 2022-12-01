import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StartIcon from "@mui/icons-material/Start";
import { Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

const TextoSobre =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const TextoSobreParte = TextoSobre.substring(0, 150) + " ...";
export default function Evento() {
  const theme = useTheme();
  const [mostrar, setMostrar] = React.useState(false);
  console.log("Mostrar: ", mostrar);
  return (
    <>
      <Box className="containercentral" sx={{ mt: 5 }}>
        <Card sx={{ minWidth: "100%" }}>
          <CardMedia
            component="img"
            height="400"
            image="/banner.jpg"
            alt="Paella dish"
          />
          <CardHeader
            action={
              <Box>
                <IconButton
                  color="primary"
                  aria-label="add to favorites"
                  sx={
                    theme.palette.mode === "dark"
                      ? {
                          bgcolor: "#242222",
                          zIndex: 100,
                          mr: 2,
                        }
                      : {
                          bgcolor: "#CCD7FF",
                          zIndex: 100,
                          mr: 2,
                        }
                  }
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <Button variant="contained">Comprar ingresso</Button>
              </Box>
            }
            title="Zé Neto & Cristiano"
            subheader="Evento único"
          />
          <CardActions disableSpacing>
            <CardHeader
              avatar={<CalendarMonthIcon color="primary" aria-label="recipe" />}
              title="QUA, 07 Set 2022"
              subheader="21:00 - 00:00"
            />
            <CardHeader
              avatar={<LocationOnIcon color="primary" aria-label="recipe" />}
              title="Espaço Unimed | São Paulo, SP"
              subheader="Rua Tagipuru, 795 - Barra Funda"
            />
            <CardHeader
              avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
              title="Organizado por:"
              subheader="Produtora ABXY"
            />
          </CardActions>
        </Card>
      </Box>
      <Box className="titesq-btndir" sx={{ mt: 3 }}>
        <Box className="flexcentral">
          <InfoIcon color="primary" />
          <Typography sx={{ ml: 1 }}>
            <strong>Pop Nacional</strong>
          </Typography>
        </Box>
        <Box className="flexcentral">
          <Button
            onClick={() => {
              setMostrar(!mostrar);
            }}
            href="#text-buttons"
          >
            Ver mais
          </Button>
          {!mostrar && <KeyboardArrowDownIcon color="primary" />}
          {mostrar && <KeyboardArrowUpIcon color="primary" />}
        </Box>
      </Box>
      <Box className="containerpuro">
        {!mostrar && TextoSobreParte}
        {mostrar && TextoSobre}
      </Box>
      <Box
        sx={{
          maxWidth: 850,
          mx: "auto",
          mt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: 850,
          mx: "auto",
          mt: 5,
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography>
          <strong>Rock n Roll</strong>
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button href="#text-buttons">Ver mais</Button>
          <StartIcon color="primary" />
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 850,
          mx: "auto",
          mt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%", position: "relative" }}>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                sx={
                  theme.palette.mode === "dark"
                    ? {
                        bgcolor: "#242222",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                    : {
                        bgcolor: "#CCD7FF",
                        position: "absolute",
                        right: 5,
                        top: 5,
                        zIndex: 100,
                      }
                }
              >
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="194"
                image="/banner1.jpg"
                alt="Paella dish"
              />
              <CardHeader
                title="João Purnê Master"
                subheader="September 14, 2016"
              />
              <CardHeader
                avatar={<Avatar alt="Perfil" src="/perfil.jpg" />}
                title="Organizador"
                subheader="Nome"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
