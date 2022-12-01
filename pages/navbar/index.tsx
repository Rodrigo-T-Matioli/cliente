import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpIcon from "@mui/icons-material/Help";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";
import useColorMode from "../../hooks/useColorMode";
import Logo from "../../icons/logo";
import LogoBg from "../../icons/logobg";

// Campo select --------------------------
const meios = [
  {
    value: "Selecionar",
    label: "Selecione o meio de pagamento",
  },
  {
    value: "pagamento-1",
    label: "Pagamento 1",
  },
  {
    value: "pagamento-2",
    label: "Pagamento 2",
  },
];
// /Campo select --------------------------

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#CCCCCC", 0.5),
  "&:hover": {
    backgroundColor: alpha("#CCCCCC", 0.8),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const textField = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#111111",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const voltarHome = () => {
    router.push(`/`);
  };

  const theme = useTheme();
  const colorMode = useColorMode();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ mt: "45px" }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Favoritos</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {">"}
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LocalGroceryStoreOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Carrinho</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {">"}
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ReceiptLongOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Pedidos</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {">"}
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              -------------------------------------------------
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Paper>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={
          theme.palette.mode === "dark"
            ? {
                bgcolor: "#222222",
                zIndex: 100,
                mr: 2,
              }
            : {
                bgcolor: "#ffffff",
                zIndex: 100,
                mr: 2,
              }
        }
      >
        <Toolbar>
          <Box onClick={voltarHome}>
            {theme.palette.mode === "dark" ? <LogoBg /> : <Logo />}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="primary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="primary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="São Paulo"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="primary"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="primary"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="primary"
            >
              <HelpIcon />
            </IconButton>
            <Avatar alt="Perfil" src="/perfil.jpg" />
            <Typography
              variant="body1"
              component="p"
              sx={
                theme.palette.mode === "dark"
                  ? {
                      color: "#FFFFFF",
                      mx: 2,
                    }
                  : {
                      color: "#333333",
                      mx: 2,
                    }
              }
            >
              Nome e Sobrenome
            </Typography>
            <IconButton
              size="large"
              aria-label="Menu"
              color="primary"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <ArrowDropDownCircleIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
