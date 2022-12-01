import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StartIcon from "@mui/icons-material/Start";
import { Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function PageInitial() {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push("/evento");
  };
  return (
    <>
      <Box className="containercentral">
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar alt="Perfil" src="/perfil.jpg" sx={{ margin: "auto" }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Categoria</strong>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ maxWidth: 850, mx: "auto" }}>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Eventos em destaque</strong>
        </Typography>
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
                <Button onClick={handleClick} variant="contained">
                  Ver mais
                </Button>
              </Box>
            }
            title="Zé Neto & Cristiano"
            subheader="14 de janeiro de 2023"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
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
      <Box className="titesq-btndir" sx={{ m: "30px auto auto auto" }}>
        <Typography>
          <strong>Pop Nacional</strong>
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

      <Box className="titesq-btndir" sx={{ m: "30px auto auto auto" }}>
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
